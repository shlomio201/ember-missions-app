import Component from '@ember/component';
import getOwner from "ember-owner/get";

export default Component.extend({

    actions: {
        toggleNewMission() {
            const button = document.getElementById('addMissionInner');
            if (button.innerHTML == "+") {
                button.innerHTML = "-";
                document.getElementById('newMissionInput').style.display = 'flex';
            } else {
                button.innerHTML = "+";
                document.getElementById('newMissionInput').style.display = 'none';
            }
        },

        addNewMission() {
            var val = document.getElementById('missioninput').value;
            if (val != "") {
                $.post("http://127.0.0.1:8000/api/mission?title="+val).then(function (resp) {
                    alert('mission added!');
                    }).catch(function (error) {
                    console.log(error)
                    alert('oh no!')
                });
            } else {
                alert('you must provide title for the mission')
            }

        },
        c2loseModal(){
            
        }
    }

});
