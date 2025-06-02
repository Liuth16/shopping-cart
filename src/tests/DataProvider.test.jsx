import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import { DataProvider } from "../features/DataProvider";
import { DataContext } from "../features/allContext";
import { useContext } from "react";

// Helper consumer to display context values
function Consumer() {
  const { data, error, loading } = useContext(DataContext);
  return (
    <div>
      <div>loading: {loading ? "true" : "false"}</div>
      <div>data: {data.length}</div>
      <div>error: {error ? "true" : "false"}</div>
    </div>
  );
}

describe("DataProvider", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("provides loading state initially", () => {
    fetch.mockResolvedValueOnce({
      status: 200,
      json: () => Promise.resolve([]),
    });
    render(
      <DataProvider>
        <Consumer />
      </DataProvider>
    );
    expect(screen.getByText(/loading: true/i)).toBeInTheDocument();
  });

  it("provides data after successful fetch", async () => {
    fetch.mockResolvedValueOnce({
      status: 200,
      json: () => Promise.resolve([{ id: 1, title: "Test" }]),
    });
    render(
      <DataProvider>
        <Consumer />
      </DataProvider>
    );
    await waitFor(() => {
      expect(screen.getByText(/loading: false/i)).toBeInTheDocument();
      expect(screen.getByText(/data: 1/i)).toBeInTheDocument();
      expect(screen.getByText(/error: false/i)).toBeInTheDocument();
    });
  });

  it("provides error if fetch fails", async () => {
    fetch.mockRejectedValueOnce(new Error("fail"));
    render(
      <DataProvider>
        <Consumer />
      </DataProvider>
    );
    await waitFor(() => {
      expect(screen.getByText(/loading: false/i)).toBeInTheDocument();
      expect(screen.getByText(/data: 0/i)).toBeInTheDocument();
      expect(screen.getByText(/error: true/i)).toBeInTheDocument();
    });
  });
});
