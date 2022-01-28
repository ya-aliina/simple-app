<template>
	<div data-vue-component="Footer" class="wrapper">

		<div class="container">
			<div class="row">
				<div class="col-12 logo">
					<a href="#"><img src="../assets/logo.png" alt="logo" class="logo_img"></a>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	name: "Footer"
}
</script>

<style scoped>

.wrapper {
	max-height: 64px;
	box-shadow: 0 0 4px rgba(66, 72, 78, .12), 0 1px 2px rgba(66, 72, 78, .08), 0 0 1px rgba(66, 72, 78, .08);
}

.logo {
	display: flex;
	justify-content: center;
	padding-left: 0;
}

.logo_img {
	display: flex;
	align-items: center;
	box-sizing: border-box;
	width: auto;
	height: auto;
	max-height: 64px;
	margin: 0 auto;
}
</style>
