<template>

	<div class="authentication">
		<div class="authentication-brand">
			<router-link to="/" class="logo">Tasty Spoon</router-link>
		</div>

		<div class="authentication-content">
			<div class="authentication-header">
				<h1 class="authentication-title">Forgot Password?</h1>
                
                <p class="authentication-text">No worry! we will send you a verification <br> code for recover your password.</p>
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

					<div class="submitbox">
						<button class="btn-submit">Continue</button>
					</div>
				</form>
			</div>

			<div class="authentication-footer">
				<p class="authentication-text">
					Remembered your password? <router-link class="link" to="/signin">Sign in</router-link>
				</p>
			</div>
		</div>
	</div>

  <router-view/>
</template>

<script>

	export default {
		name: 'ForgotPassword',
	}

</script>