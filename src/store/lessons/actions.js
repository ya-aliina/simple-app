import { getDatabase, ref, set, update, child } from "firebase/database";

function generateId() {
    let id = Date.now()
    return id
}

export default {
    loadLessons () {
    },
    createLesson (context, data) {
        data.id = generateId();
        const db = getDatabase();
        set(ref(db, 'lessons/'+data.id), data);
    },
    updateLesson(context, data) {
        const updates = {};
        updates['lessons/' +  data.id] = data;
        const db = getDatabase();
        return update(ref(db), updates);
    },
    deleteLesson(context, id) {
        const updates = {};
        updates['lessons/' + id] = null;
        const db = getDatabase();
        return update(ref(db), updates);
    }
}