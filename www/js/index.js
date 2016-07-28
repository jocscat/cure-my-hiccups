/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		startActivity();
	}
};

 // JC - add custom code after app constructor modified 27/07/16
function startActivity() {
		//set up button listeners
		var btn0 = document.getElementById('btn0');
		btn0.addEventListener("click", this.startPress);
		var btn1 = document.getElementById('btn1');
		btn1.addEventListener("click", this.hiccupPress);
		var btnE = document.getElementById('btnEnd');
		btnE.addEventListener("click", this.successPress);
		var btnTA = document.getElementById('btnTryAgain');
		btnTA.addEventListener("click", this.tryAgainPress);
		var btnGU = document.getElementById('btnGiveUp');
		btnGU.addEventListener("click", this.giveUpPress);
		
		// show caution0 and btn0 on load.
		transistion('show','caution0');
        transistion('show','btn0');
		console.log('startActivity');
}

function transistion(type, id) {
		var transElement = document.getElementById(id);
		if(type == 'show'){
			transElement.setAttribute('style', 'display:block;');
		}else if(type == 'hide'){
			transElement.setAttribute('style', 'display:none;');
		}
}

function startPress(){
		//show step1 and btn1 after btn0 press.
		transistion('hide','caution0');
        transistion('hide','btn0');

		transistion('show','step1');
        transistion('show','btn1');
		console.log('step1 at time: '+'[' + Date.now() + ']');
}
function hiccupPress(){
		//show step2 for 3 seconds
		transistion('hide','step1');
        transistion('hide','btn1');

		transistion('show','step2');
		console.log('step2 hiccup recorded at time: '+'[' + Date.now() + ']');
		window.setTimeout(step3, 3000);
		console.log('Interval set');
}
function step3(){
		console.log('Step 3');
		//show step3 for 9 seconds
		transistion('hide','step2');
		transistion('show','step3');
		window.setTimeout(step4, 9000);
}
function step4(){
		//show step4 for 3 seconds
		transistion('hide','step3');
		transistion('show','step4');
		window.setTimeout(step5, 3000);
}
function step5(){	
		//show step5 for 4 seconds
		transistion('hide','step4');
		transistion('show','step5');
		window.setTimeout(step6, 4000);
}
function step6(){	
		//show step6 for 3 seconds
		transistion('hide','step5');
		transistion('show','step6');
		window.setTimeout(step7, 3000);
}
function step7(){	
		//show step7 for 9 seconds
		transistion('hide','step6');
		transistion('show','step7');
		window.setTimeout(step8, 9000);
}
function step8(){	
		//show step8 for 4 seconds
		transistion('hide','step7');
		transistion('show','step8');
		window.setTimeout(step9, 4000);
}
function step9(){	
		//show step9,btnEnd,btnTryAgain,btnGiveUp until button pressed
		transistion('hide','step8');
		transistion('show','step9');
		transistion('show','btnEnd');
		transistion('show','btnTryAgain');
		transistion('show','btnGiveUp');
		console.log('End buttons appear: '+'[' + Date.now() + ']');
}
function successPress(){
		//btnEnd shows success
		transistion('hide','step9');
		transistion('hide','btnEnd');
		transistion('show','btnTryAgain');
		transistion('hide','btnGiveUp');
		transistion('show','success');
		console.log('Success: '+'[' + Date.now() + ']');
}
function tryAgainPress(){
		//btnTryAgain shows step1 and btn1
		transistion('hide','step9');
		transistion('hide','btnEnd');
		transistion('hide','btnTryAgain');
		transistion('hide','btnGiveUp');
		transistion('hide','success');
		transistion('hide','giveup');
		transistion('show','step1');
        transistion('show','btn1');
		console.log('TryAgain: '+'[' + Date.now() + ']');
}
function giveUpPress(){
		//btnGiveUp shows giveup and btnTryAgain
		transistion('hide','step9');
		transistion('hide','btnEnd');
		transistion('show','btnTryAgain');
		transistion('hide','btnGiveUp');
		transistion('show','giveup');
		console.log('GiveUp: '+'[' + Date.now() + ']');
}
