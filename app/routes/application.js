import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return $.get('http://127.0.0.1:8000/api/mission');
    }
    ,
    actions: {
        rerenderRout(){
            this.refresh()
        }
        ,
        addNewMission(){
            var val = document.getElementById('missioninput').value;
            if (val != "") {
                $.post("http://127.0.0.1:8000/api/mission?title="+val).then(function (resp) {
                        const button = document.getElementById('addMissionInner');
                        button.innerHTML = "+";
                        document.getElementById('newMissionInput').style.display = 'none';
                    }).catch(function (error) {
                        console.log(error)
                        alert('oh no!')
                });
                this.refresh()
            } else {
                alert('you must provide title for the mission')
            }
        }
        ,
        updateFoo(...args) {
            // handle action
            return 42;
        }
    }
});
