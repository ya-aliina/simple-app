<template>
	<div data-vue-component="AddLesson">
		<Cover text="Добавить урок"/>
		<div class="wrapper">
			<div class="container">

				<form>
					<div class="row pt-5">

						<div class="col-4">
							Выберите курс, который вы хотите обновить
						</div>
						<div class="col-8">
							<my-select :options="selectOptions" v-model:selected="selectAnswer"/>
						</div>
						<div class="pt-1">
							<MyInput label="Название курса"  v-model="course"/>
						</div>
						<div class="pt-1">
							<MyInput label="Название урока" v-model="lesson"/>
						</div>
						<MyTextarea label="Cодержание" v-model="about" rows="8"/>

					</div>
					<div class="form-group">
						<label for="exampleFormControlFile1">Загрузите дополнительные материалы</label>
						<input type="file" class="form-control-file" id="exampleFormControlFile1">
					</div>

					<MyButton label="Сохранить" type="submit"  @click="showDialog"/>
				</form>

			</div>
		</div>
	</div>
</template>

<script>
import Cover from "../components/Cover";
import MySelect from "../components/ui/MySelect";
import MyInput from "../components/ui/MyInput";
import MyTextarea from "../components/ui/MyTextarea";
import MyButton from "../components/ui/MyButton";
import MyDialog from "../components/ui/MyDialog";

export default {
	name: "AddLesson",
	components: {
		Cover,
		MySelect,
		MyInput,
		MyTextarea,
		MyButton,
		MyDialog,
	},
	data() {
		return {
			selectAnswer: '',
			selectOptions: [
				'Создать новый курс',
				'Business English',
				'Excel. Базовый курс',
				'PowerPoint. Базовый курс',
			],
			course: '',
			lesson: '',
		}
	},
	methods: {
		showDialog () {
			this.$refs.dialog.show();
		}
	}
}
</script>

<style scoped>
/deep/ .cover {
	background-image: url("../assets/cover/add_lesson.jpg");
}
</style>
