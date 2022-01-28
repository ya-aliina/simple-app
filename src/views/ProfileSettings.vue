<template>
	<div data-vue-component="ProfileSettings">
		<Cover text="Настройки профиля"/>
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="title">
						Настройки аккаунта
					</div>
				</div>
			</div>
			<div class="form-group">
				<MyInput label="Имя"  v-model="name"/>
				<MyInput label="Фамилия"  v-model="surname"/>
				<MyInput label="email"  v-model="email"/>
	<!--			<MyInput label="Логин" placeholder="Введите логин ..." v-model=""/>-->
	<!--			<MyInput label="Пароль" placeholder="Введите пароль" v-model=""/>-->
				<MyCheckbox v-model="checkbox1"  label="Получать уведомления на почту"/>
				<div class=" wrapper-radio d-flex px-10 ">
					<div class="col-2">Очень важный вопрос</div>
					<div class=" col-8 radio">
						<MyRadio v-model="picked" value="Да" label="Да"/>
						<MyRadio v-model="picked" value="Нет" label="Нет"/>
					</div>
				</div>


				<div>Выбрано: {{ picked }}</div>
				<MyTextarea label="О себе" v-model="about" rows="8"/>
				<MyButton label="Сохранить" type="submit"/>
			</div>
		</div>
	</div>
</template>

<script>
import MyInput from "../components/ui/MyInput";
import MyCheckbox from "../components/ui/MyCheckbox";
import MyRadio from "../components/ui/MyRadio";
import MyTextarea from "../components/ui/MyTextarea";
import MyButton from "../components/ui/MyButton";

import Cover from "../components/Cover";

export default {
	name: "ProfileSettings",
	components: {
		Cover,
		MyInput,
		MyCheckbox,
		MyRadio,
		MyTextarea,
		MyButton
	},
	data() {
		return {
			surname: '',
			name: '',
			checkbox1: false,
			picked: null,
			about: '',
			email: '',
		}
	}

}
</script>

<style scoped>
/deep/ .cover {
	background-image: url("../assets/cover/profile_settings.jpg");
}

.title {
	font-family: Roboto, sans-serif;
	font-weight: 600;
	font-size: 20px;
	margin: 50px 0 30px;
	color: #42484e;
}
.wrapper-radio {
	padding-top: 10px;
	padding-bottom: 10px;
}
</style>
