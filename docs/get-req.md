Here’s the documentation for the `GET /store` request, which allows users to retrieve initiatives based on either a specific `data_id` or `data_user_address`.

---

### GET /store

Retrieve initiatives based on `data_id` or `data_user_address`. If no query parameters are provided, the API will return up to 15 initiatives by default.

**Endpoint:**  
`GET /gateway/v1/store`

**Query Parameters:**

| Parameter           | Type     | Description                                                           | Required |
|---------------------|----------|-----------------------------------------------------------------------|----------|
| `data_id`           | `string` | Unique identifier of the initiative to retrieve                       | No       |
| `data_user_address` | `string` | Ethereum address of the user, used to fetch initiatives by the user   | No       |

> **Note**: If both `data_id` and `data_user_address` are provided, the `data_id` query takes precedence.

---

#### Valid Request Examples

1. **Retrieve initiative by `data_id`:**

   **Request URL:**
   ```plaintext
   {{URL}}/store?data_id=67231513c1c6acc8d3563150
   ```

2. **Retrieve initiatives by `data_user_address`:**

   **Request URL:**
   ```plaintext
   {{URL}}/store?data_user_address=0xa0Ee7A142d267C1f36714E4a8F75612F20a79720
   ```

3. **Retrieve up to 15 latest initiatives (no query parameters):**

   **Request URL:**
   ```plaintext
   {{URL}}/store
   ```

---

#### Invalid Request Examples

1. **Invalid `data_id` format:**

    ```plaintext
    {{URL}}/store?data_id=invalid_id
    ```

    **Error Response:**
    ```json
    {
      "success": false,
      "message": "Invalid data_id"
    }
    ```

---

### Sample Axios GET Request

Below is an example of a `GET` request using `axios` to retrieve initiatives.

```javascript
import axios from 'axios';

const fetchInitiatives = async () => {
  const url = 'https://projectx-backend-a7cq.onrender.com/gateway/v1/store?data_user_address=0xa0Ee7A142d267C1f36714E4a8F75612F20a79720';
  const headers = {
    'Content-Type': 'application/json',
    'AuthenticateProjectX': '<token>', // Replace <token> with your actual token
  };

  try {
    const response = await axios.get(url, { headers });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

fetchInitiatives();
```

---

### Response Structure

**Success Response (Status 200):**

If initiatives are found:

```json
{
  "success": true,
  "initiatives": [
    {
      "_id": "67231513c1c6acc8d3563150",
      "title": "Help Joe learn Web Development",
      "user_address": "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
      "description": "Help Joe learn Web Development",
      "goal": "500000000000000000",
      "date_created": "2024-10-31T05:26:43.273Z",
      "__v": 0
    }
  ]
}
```

If no initiatives are found:

```json
{
  "success": true,
  "initiatives": []
}
```

**Error Response (Status 400):**

```json
{
  "success": false,
  "message": "<error_message>"
}
```

- `success`: Indicates if the request was successful.
- `initiatives`: Contains an array of initiatives if found.
- `message`: Provides details about any error encountered.