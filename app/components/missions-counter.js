import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
    totals : null,

    didReceiveAttrs(){
        this._super(...arguments);
        let undone = 0;
        let done = 0;

        this.missions.forEach(element => {
            if(element.done){
                done++;
            }else{
                undone++;
            }
        });
        let totals = {undone : undone, done:done , totals: undone + done}
        Ember.set(this , 'totals' , totals);
    },

});
