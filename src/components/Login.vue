<template>

	<div class="authentication">
		<div class="authentication-brand">
			<router-link to="/" class="logo">Tasty Spoon</router-link>
		</div>

		<div class="authentication-content">
			<div class="authentication-header">
				<h1 class="authentication-title">Sign In</h1>
			</div>

			<div class="authentication-body">
				<form  class="authenticationform">
					<div class="inputbox">
						<div class="infobox">
							<div class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#AAA492" class="bi bi-envelope" viewBox="0 0 16 16">
									<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
								</svg>
							</div>
							<input type="email" placeholder="Enter Email Address" class="inputfield">
						</div>
						<p class="error-message">You must have fill this field</p>
					</div>

					<div class="inputbox">
						<div class="infobox">
							<input type="password" placeholder="Enter Password" class="inputfield">
							<div class="icon toggleicon">
								<svg class="showicon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#AAA492" viewBox="0 0 16 16">
									<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
									<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
								</svg>

								<svg class="hideicon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#AAA492" viewBox="0 0 16 16">
									<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
									<path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
									<path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
								</svg>
							</div>
						</div>
						<div class="forgotlink">
							<router-link to="/forgotpassword" class="forgot-text">Forgot password?</router-link>
						</div>

						<p class="error-message">You must have fill this field</p>
					</div>

					<div class="submitbox">
						<button class="btn-submit">Sign Up</button>
					</div>
				</form>
			</div>

			<div class="authentication-footer">
				<p class="authentication-text">
					Don't have an account <router-link class="link" to="/signup">Sign up</router-link>
				</p>
			</div>
		</div>
	</div>

  <router-view/>
</template>

<script>

	export default {
		name: 'Login',
	}

</script>