import { getDatabase, ref, set, update, child } from "firebase/database";

function generateId() {
    let id = Date.now()
    return id
}

export default {
    createEvent (context, data) {
        data.id = generateId();
        const db = getDatabase();
        set(ref(db, 'calendar/'+data.id), data);
    },
    updateEvent(context, data) {
        const updates = {};
        updates['calendar/' +  data.id] = data;
        const db = getDatabase();
        return update(ref(db), updates);
    },
    deleteEvent(context, id) {
        const updates = {};
        updates['calendar/' + id] = null;
        const db = getDatabase();
        return update(ref(db), updates);
    }
}