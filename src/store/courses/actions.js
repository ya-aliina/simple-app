import { getDatabase, ref, set, update, child } from "firebase/database";

function generateGuid() {
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
    let newGuid = _p8() + _p8(true) + _p8(true) + _p8();
    return newGuid
}

export default {
    createCourse (context, data) {
        data.id = generateGuid();
        const db = getDatabase();
        set(ref(db, 'courses/'+data.id), data);
    },
    updateCourse(context, data) {
        const updates = {};
        updates['courses/' +  data.id] = data;
        const db = getDatabase();
        return update(ref(db), updates);
    },

    deleteCourse(context, id) {
        const updates = {};
        updates['courses/' + id] = null;
        const db = getDatabase();
        return update(ref(db), updates);
    }

}