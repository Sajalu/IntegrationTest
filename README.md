# 🧪 IntegrationTest

A repository dedicated to demonstrating and practicing **integration testing** and **unit testing** in a modern JavaScript/Node.js environment.

The project features a small internal utility (`HexToRgb`) and a simple HTTP API, both covered by automated tests to ensure correctness and stability.

## 🚀 Project Structure & Focus

This project is structured to showcase different testing scenarios:

| File | Purpose | Test Type |

| **`index.js`** | The main application code (e.g., API endpoints, core logic). | - |
| **`HexToRgbTest.js`** | Contains **Unit Tests** for a utility function (likely converting Hex codes to RGB format). | Unit |
| **`api.test.js`** | Contains **Integration Tests** to verify that API endpoints work as expected. | Integration |
| **`test.http`** | Used for manually testing API endpoints (e.g., with VS Code's REST Client). | Manual/Smoke |
| **`package.json`** | Defines project dependencies and test scripts. | - |

##  Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js** (LTS version recommended)
* **npm** (Node Package Manager)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Sajalu/IntegrationTest.git](https://github.com/Sajalu/IntegrationTest.git)
    cd IntegrationTest
    ```

2.  **Install dependencies:**
    This command will install all necessary packages defined in your `package.json` (e.g., a testing library like Jest, and any API framework dependencies like Express).
    ```bash
    npm install
    ```

## ✅ Running the Tests

To execute all the tests (both unit and integration tests) defined in `HexToRgbTest.js` and `api.test.js`:

```bash
npm test

## Manual API Testing
You can use the test.http file to manually interact with the API endpoints. If you are using the VS Code REST Client extension, you can simply open the file and click the "Send Request" links above each endpoint.

Start your application (if required, e.g., node index.js/ npm start).

Open test.http in your editor.

Send the requests to test the API locally.


