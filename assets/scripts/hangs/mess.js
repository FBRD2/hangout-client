<nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-start align-items-center">
<div class="dropdown sign-up">
  <button class="btn btn-sign dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sign up
  </button>
  <form id="sign-up" class="dropdown-menu p-4 form-background">
    <div class="form-group">
      <label for="dropdownFormUsername">Username</label>
      <input type="text" class="form-control" name="credentials[email]" placeholder="example@email.com">
    </div>
    <div class="form-group">
      <label for="dropdownFormPassword">Password</label>
      <input type="password" class="form-control" name="credentials[password]" placeholder="Password">
    </div>
    <div class="form-group">
      <label for="dropdownFormPassword">Confirm Password</label>
      <input type="password" class="form-control" name="credentials[password_confirmation]" placeholder="Confirm Password">
    </div>
    <button type="submit" class="btn btn-sign" value="Sign up">Sign up</button>
  </form>
</div>

<div class="dropdown sign-in">
  <button class="btn btn-sign dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sign in
  </button>
  <form id="sign-in" class="dropdown-menu p-4 form-background">
    <div class="form-group">
      <label for="dropdownFormUsername">Username</label>
      <input type="text" class="form-control" id="dropdownFormUsername" name="credentials[email]" placeholder="username">
    </div>
    <div class="form-group">
      <label for="dropdownFormPassword">Password</label>
      <input type="password" class="form-control" name="credentials[password]" placeholder="password">
    </div>
    <button type="submit" class="btn btn-sign" value="Sign in">Sign in</button>
  </form>
</div>

<div id="change-password" class="dropdown change-password" style="display: none;">
  <button class="btn btn-sign dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Change Password</button>
  <form id="change-password2" class="dropdown-menu p-4 form-background">
    <div class="form-group">
      <label for="dropdownFormPassword">Password</label>
      <input type="text" class="form-control" name="passwords[old]" placeholder="Old password">
    </div>
    <div class="form-group">
      <label for="dropdownFormPassword">Password</label>
      <input type="password" class="form-control" name="passwords[new]" placeholder="New password">
    </div>
    <button type="submit" class="btn btn-sign" value="Change Password">Change Password</button>
  </form>
</div>

<div id="sign-out" class="dropdown sign-out" style="display: none;">
  <button class="btn btn-sign dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sign Out</button>
  <form class="dropdown-menu p-4 form-background">
    <button type="submit" class="btn btn-sign" value="Sign Out">Sign Out</button>
  </form>
</div>
</nav>
