# Restaurant-System
# Registration Form with Validation and Local Storage

This task implements a user registration form with validation and a dynamic display of user information.
The form validates inputs for specific requirements and displays appropriate messages for errors.
If all fields are valid, the user's data is stored in the browser's local storage and displayed in a card.

---

## Features

1. **Input Fields**:
   - **Username**: Must not contain spaces.
   - **Password**: Must be at least 9 characters, contain one uppercase letter, one number, and one special character.
   - **Date of Birth**: Must follow the `YYYY-MM-DD` format.
   - **Phone Number**: Must be 10 digits and start with `07`.
   - **Email**: Must follow a valid email format.
   - **Order Preferences**:
     - Multiple item selection (e.g., Shawarma, Zinger, Burger).
     - Order type: Sandwich or Combo.

2. **Validation**:
   - Alerts users with clear messages if any field violates validation rules.
   - Displays all validation errors at once for better user experience.

3. **Local Storage**:
   - Stores the validated user data in the browser's local storage.
   - Retrieves and displays the stored data dynamically in a card below the form.

4. **Dynamic Card Generation**:
   - Creates and displays a styled card with the user's information once the form is submitted successfully.

---

## Usage

### Prerequisites
- A modern web browser that supports JavaScript.

### How to Run
1. Clone the repository or download the project files.
2. Open the `index.html` file in your browser.
3. Fill out the form and click "Submit".

### Validation Rules
- **Username**: No spaces allowed.
- **Password**: At least 9 characters, includes uppercase, a number, and a special character.
- **Date of Birth**: Format must be `YYYY-MM-DD`.
- **Phone Number**: Must start with `07` and be 10 digits long.
- **Email**: Must be in a valid email format (e.g., `example@domain.com`).

---
