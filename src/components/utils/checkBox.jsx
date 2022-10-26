import React from "react";

const CheckBox = () => {
  return (
    <div class="form-check m-3">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label class="form-check-label" for="flexCheckDefault">
        <p>
          I agree to{" "}
          <a href="https://breezy.hr/policies/privacy">privacy policy</a> and{" "}
          <a href="https://breezy.hr/policies/terms">terms and conditions</a>
        </p>
      </label>
    </div>
  );
};

export default CheckBox;
