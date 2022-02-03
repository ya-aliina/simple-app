<template>
	<div data-vue-component="AddLesson">
		<cover>Добавить урок</cover>
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
							<my-input label="Название курса"  v-model="course"/>
						</div>
						<div class="pt-1">
							<my-input label="Название урока" v-model="lesson"/>
						</div>
						<my-textarea label="Cодержание" v-model="about" rows="8"/>

					</div>
					<div class="form-group">
						<label for="exampleFormControlFile1">Загрузите дополнительные материалы</label>
						<input type="file" class="form-control-file" id="exampleFormControlFile1">
					</div>

					<my-button label="Сохранить" type="submit"  @click="showDialog"/>
				</form>

			</div>
		</div>
	</div>
</template>

<script>
import Cover from "../components/Cover";

export default {
	name: "AddLesson",
	components: {
		Cover,
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
	background-image: url("../assets/cover/add_lesson_dark.jpg");
}
</style>
