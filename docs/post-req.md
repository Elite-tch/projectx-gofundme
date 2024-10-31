# Project X API Documentation

This API provides endpoints for managing initiatives within the Project X application. This documentation includes example requests, headers, expected responses, and guidelines for frontend developers.

---

## Base URL

```plaintext
https://projectx-backend-a7cq.onrender.com/gateway/v1/
```

---

## Headers

All requests must include the following headers:

| Header                 | Value              | Required |
| ---------------------- | ------------------ | -------- |
| `Content-Type`         | `application/json` | Yes      |
| `AuthenticateProjectX` | `<token>`          | Yes      |

Replace `<token>` with the appropriate value for authentication.

---

## Endpoints

### POST /store

Create a new initiative.

**Endpoint:**  
`POST /gateway/v1/store`

**Request Body:**

The body should contain the `data` object with the following properties:

| Parameter      | Type     | Description                           | Required |
| -------------- | -------- | ------------------------------------- | -------- |
| `title`        | `string` | Title of the initiative               | Yes      |
| `description`  | `string` | Description of the initiative         | Yes      |
| `goal`         | `string` | Fundraising goal in Ether as a string | Yes      |
| `user_address` | `string` | Ethereum address of the user          | Yes      |

#### Valid Request Example

```json
{
    "data": {
        "title": "Help Joe learn Web Development",
        "description": "Help Joe learn Web Development",
        "goal": "0.5",
        "user_address": "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"
    }
}
```

#### Invalid Request Examples

1. **Missing `title` Field:**

    ```json
    {
        "data": {
            "description": "Help Joe learn Web Development",
            "goal": "0.5",
            "user_address": "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"
        }
    }
    ```

    **Error:**

    ```json
    {
        "success": false,
        "message": "data.title is required."
    }
    ```

2. **Invalid `goal` Type:**

    ```json
    {
        "data": {
            "title": "Help Joe learn Web Development",
            "description": "Help Joe learn Web Development",
            "goal": 0.5, // should be a string, not a number
            "user_address": "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"
        }
    }
    ```

    **Error:**

    ```json
    {
        "success": false,
        "message": "data.goal must be a string."
    }
    ```

3. **Empty `data` Object:**

    ```json
    {
        "data": {}
    }
    ```

    **Error:**

    ```json
    {
        "success": false,
        "message": "data must be a non-empty object."
    }
    ```

---

### Sample Axios POST Request

Below is an example of a `POST` request using `axios` to create a new initiative.

```javascript
import axios from "axios";

const createInitiative = async () => {
    const url = "https://projectx-backend-a7cq.onrender.com/gateway/v1/store";
    const headers = {
        "Content-Type": "application/json",
        AuthenticateProjectX: "<token>", // Replace <token> with your actual token
    };
    const data = {
        data: {
            title: "Help Joe learn Web Development",
            description: "Help Joe learn Web Development",
            goal: "0.5",
            user_address: "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
        },
    };

    try {
        const response = await axios.post(url, data, { headers });
        console.log("Response:", response.data);
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    }
};

createInitiative();
```

---

## Response Structure

**Success Response (Status 201):**

```json
{
    "success": true,
    "result": "<initiative_id>"
}
```

-   `success`: Indicates if the request was successful.
-   `result`: ID of the newly created initiative.

**Error Response (Status 400):**

```json
{
    "success": false,
    "message": "<error_message>"
}
```

-   `success`: Indicates failure of the request.
-   `message`: Provides details about the error.

---
