import Component from '@ember/component';

export default Component.extend({

    actions: {
        doMission(mission) {
            if (document.querySelector('#single-' + mission.id + ' .doMission').classList.contains('done')) {
                $.ajax({
                    url: "http://127.0.0.1:8000/api/mission/" + mission.id + "/?done=0",
                    type: 'PUT',
                    success: function (result) {
                        document.querySelector('#single-' + mission.id + ' .doMission').classList.remove('done')
                        document.querySelector('#single-' + mission.id + ' .misiionTitle ').classList.remove('done')
                        console.log('mission UNDONE!')
                        document.querySelector('#undone span').innerHTML = parseInt(document.querySelector('#undone span').innerHTML) + 1;
                        document.querySelector('#done span').innerHTML = parseInt(document.querySelector('#done span').innerHTML) - 1;
                    }
                });
            } else {
                $.ajax({
                    url: "http://127.0.0.1:8000/api/mission/" + mission.id + "/?done=1",
                    type: 'PUT',
                    success: function (result) {
                        document.querySelector('#single-' + mission.id + ' .doMission').classList.add('done')
                        document.querySelector('#single-' + mission.id + ' .misiionTitle ').classList.add('done')
                        console.log('mission DONE!')
                        document.querySelector('#undone span').innerHTML = parseInt(document.querySelector('#undone span').innerHTML) - 1;
                        document.querySelector('#done span').innerHTML = parseInt(document.querySelector('#done span').innerHTML) + 1;
                    }
                });
            }
        },
        updateMission(mission) {
            let obj = document.querySelector('#single-' + mission.id + ' .deleteMission');
            if (obj.innerHTML != "V") {
                $.ajax({
                    url: "http://127.0.0.1:8000/api/mission/" + mission.id + "/",
                    type: 'DELETE',
                    success: function (result) {
                        console.log('mission DELETED!')
                        document.getElementById('single-' + mission.id).remove();
                        if(done == 0){
                            document.querySelector('#undone span').innerHTML = parseInt(document.querySelector('#undone span').innerHTML) - 1;
                        }else{
                            document.querySelector('#done span').innerHTML = parseInt(document.querySelector('#done span').innerHTML) - 1;
                        }
                        document.querySelector('#total span').innerHTML = parseInt(document.querySelector('#total span').innerHTML) - 1;
                    }
                });
            } else {
                let val = document.querySelector('#single-' + mission.id + ' input').value;
                $.ajax({
                    url: "http://127.0.0.1:8000/api/mission/" + mission.id + "/?title=" + val,
                    type: 'PUT',
                    success: function (result) {
                        obj.innerHTML = "X"
                        console.log('mission UPDATED!')
                    }
                });
            }
        },

        hadchanges(mission) {
            let obj = document.querySelector('#single-' + mission.id + ' .deleteMission');
            obj.innerHTML = "V";
        },
    }
});
