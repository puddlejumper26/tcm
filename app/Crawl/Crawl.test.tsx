// import React from "react";
// import { render, fireEvent, waitFor } from "@testing-library/react-native";
// import CrawlComponent from "./Crawl";
//
// // Mock fetch function to control the responses
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     ok: true,
//     json: () =>
//       Promise.resolve([
//         { id: 1, title: "Post 1", body: "This is post 1." },
//         { id: 2, title: "Post 2", body: "This is post 2." },
//       ]),
//   })
// );
//
// describe("CrawlComponent", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });
//
//   it("should fetch and display data when Fetch Data button is pressed", async () => {
//     const { getByText } = render(<CrawlComponent />);
//
//     // Press the Fetch Data button
//     const fetchButton = getByText("Fetch Data");
//     fireEvent.press(fetchButton);
//
//     // Wait for the data to be displayed
//     await waitFor(() => {
//       expect(getByText(/Post 1/)).toBeTruthy();
//       expect(getByText(/Post 2/)).toBeTruthy();
//     });
//   });
//
//   it("should remove data when Remove Data button is pressed", async () => {
//     const { getByText, queryByText } = render(<CrawlComponent />);
//
//     // Press the Fetch Data button
//     const fetchButton = getByText("Fetch Data");
//     fireEvent.press(fetchButton);
//
//     // Wait for the data to be displayed
//     await waitFor(() => {
//       expect(getByText(/Post 1/)).toBeTruthy();
//       expect(getByText(/Post 2/)).toBeTruthy();
//     });
//
//     // Press the Remove Data button
//     const removeButton = getByText("Remove Data");
//     fireEvent.press(removeButton);
//
//     // Wait for the data to be removed
//     await waitFor(() => {
//       expect(queryByText(/Post 1/)).toBeNull();
//       expect(queryByText(/Post 2/)).toBeNull();
//     });
//   });
//
//   it("should not print data more than once", async () => {
//     const spyConsoleLog = jest
//       .spyOn(console, "log")
//       .mockImplementation(() => {});
//     const { getByText } = render(<CrawlComponent />);
//
//     // Press the Fetch Data button
//     const fetchButton = getByText("Fetch Data");
//     fireEvent.press(fetchButton);
//
//     // Wait for the data to be displayed and check if data is logged once
//     await waitFor(() => {
//       expect(spyConsoleLog).toHaveBeenCalledTimes(1);
//     });
//
//     spyConsoleLog.mockRestore();
//   });
// });
