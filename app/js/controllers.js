'use strict';

/* Controllers */


/* Homepage Controllers */
function MyCtrl1($scope){
	$scope.observerName = 'Observed by';
	$scope.fsrName = 'FSR name';
	$scope.obsType = 'Observation Type';
	$scope.todayDate = 'Enter Date';


}

/* First Page Controller */
function MyCtrl2($scope){
	$scope.PgOnePlan = [];
	var firstSet = [{Section: 'Plan', Page: 1, QNumber: 1, Description: 'Neatness of workstation', CheckYes: false, CheckNo: false, CheckNA: false, Notes: "Notes"}, {Section: 'Plan' , Page: 1, QNumber: 2, Description:'Organization of supplies', CheckYes: false, CheckNo: false, CheckNA: false, Notes:' '}, {Section: 'Plan', Page: 1, QNumber: 3, Description: ' Availability of materials', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Plan', Page: 1, QNumber: 4, Description: 'Personal appearance', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}];
	
	$scope.PgOnePlan = firstSet;
	$scope.PgOneRelax = [];
	var secndSet = [{Section: 'Relax', Page: 1, QNumber: 1, Description:'Stand up', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Relax', Page: 1, QNumber: 2, Description:'Greet member', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Relax', Page: 1, QNumber: 3, Description: 'Smile', CheckYes: false, CheckNo: false, CheckNA: false, Notes:' '}, {Section: 'Relax', Page: 1, QNumber: 4, Description: 'Shake hands', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Relax', Page: 1, QNumber: 5, Description: 'Introduce self', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ''}];
	
	$scope.PgOneRelax = secndSet;
}

function MyCtrl3($scope){
	$scope.PgTwoRelax = [];
	var PgTwoSet = [{Section: 'Relax', Page: 2, QNumber: 6, Description: "Obtain member's name", CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Relax', Page: 2, QNumber: 7, Description: 'Give business card', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Relax', Page: 2, QNumber: 8, Description: 'Offer seat', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Relax', Page: 2, QNumber: 9, Description:"Obtain and use member's name throughout meeting", CheckYes: false, CheckNo: false, CheckNA: false, Notes:' '}, {Section: 'Relax', Page: 2, QNumber: 10, Description: 'Establish rapport', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Relax', Page: 2, QNumber: 11, Description: 'Active listening', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Relax', Page: 2, QNumber: 12, Description: 'Complete IMR with member', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Relax', Page: 2, QNumber: 13, Description: 'Proper posture (superior, equal inferior)', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}];
	$scope.PgTwoRelax = PgTwoSet;
}

function MyCtrl4($scope){
	$scope.PgThreeEvaluate = [];
	var PgThreeSet = [{Section: 'Evaluate', Page: 3, QNumber: 1, Description: 'Use permission statement', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Evaluate', Page: 3, QNumber: 2, Description: 'Formal communication skills', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Evaluate', Page: 3, QNumber: 3, Description: 'Professionalism', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Evaluate', Page: 3, QNumber: 4, Description:'Identify current relationship with our CU', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Evaluate', Page: 3, QNumber: 5, Description: 'Identify how member heard about our CU', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section:'Evaluate', Page: 3, QNumber: 6, Description: "Obtained member's motivation for coming to CU", CheckYes: false, CheckNo: false, CheckNA: false, Notes:' '}, {Section:'Evaluate', Page: 3, QNumber: 7, Description: 'Open-ended questions', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Evaluate', Page: 3, QNumber: 8, Description: ' Close-ended questions', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Evaluate', Page: 3, QNumber: 9, Description: 'Additional sales opportunities', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Evaluate', Page: 3, QNumber: 10, Description: "Identified and aligned with member's color", CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}];
	$scope.PgThreeEvaluate = PgThreeSet;
}

function MyCtrl5($scope){
	$scope.PgLending = [];
	$scope.PgPresent = [];
	var PgFourSetOne = [{Section: 'Lending', Page: 4, QNumber: 1, Description: 'Credit evaluated correctly', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Lending', Page: 4, QNumber: 2, Description: 'Income evaluated correctly', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Lending', Page: 4, QNumber: 3, Description: 'Loan type vs. loan risk', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Lending', Page: 4, QNumber: 4, Description: 'Clear and cncise notes', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}];
	$scope.PgLending = PgFourSetOne;
	var PgFourSetTwo = [{Section: 'Present', Page: 4, QNumber: 1, Description: 'Use benefit statement when selling primary product', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Present', Page: 4, QNumber: 1, Description: 'Use benefit statement when selling primary product', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Present', Page: 4, QNumber: 2, Description: 'Integrate at least one associated service when selling primary product', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Present', Page: 4, QNumber: 3, Description: 'Use benefit statement when describing associated service', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Present', Page: 4, QNumber: 4, Description: 'Cross-sell at least one product', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ''}, {Section: 'Present', Page: 4, QNumber: 5, Description: 'Use benefit statements when cross-selling products', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Present', Page: 4, QNumber: 6, Description: "Use appropriate value statements: aligned with member's color", CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}];
	$scope.PgPresent = PgFourSetTwo;
}
	
function MyCtrl6($scope){
	$scope.PgClose = [];
	var PgFiveClose = [{Section: 'Close', Page: 5, QNumber: 1, Description: 'Use trial close statement', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Close', Page: 5, QNumber: 2, Description: 'Ask for the business', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Close', Page: 5, QNumber: 3, Description: 'Discuss next steps in approval process with member', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Close', Page: 5, QNumber: 4, Description: 'Inform member what we can do for them in a positive manner', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Close', Page: 5, QNumber: 5, Description: 'Communicate to member why they were denied', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Close', Page: 5, QNumber: 6, Description: 'Handle close objections', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Close', Page: 5, QNumber: 7, Description: "Break member's pattern of objections", CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Close', Page: 5, QNumber: 8, Description: 'Enter IMR color into Symitar', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}];
	$scope.PgClose = PgFiveClose;
}
	
function SevenController($scope){
	$scope.PgFollowUp = [];
	var PgSixFollowUp = [{Section: 'Follow-up', Page: 6, QNumber: 1, Description: "Obtain member's contact info", CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Follow-up', Page: 6, QNumber: 2, Description: 'Schedule another meeting in person or on phone', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Follow-up', Page: 6, QNumber: 3, Description: 'Offer to contact member at later date/time', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Follow-up', Page: 6, QNumber: 4, Description: 'Offer to be of future assistance', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Follow-up', Page: 6, QNumber: 5, Description: 'Give forms or literature to take home', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Follow-up', Page: 6, QNumber: 6, Description: 'Give business card', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}, {Section: 'Follow-up', Page: 6, QNumber: 7, Description: 'Thank member/Closing remarks/Shake hands', CheckYes: false, CheckNo: false, CheckNA: false, Notes: ' '}];
	$scope.PgFollowUp = PgSixFollowUp;
}	
	
	
function MyCtrl8($scope){
	$scope.oNotes = 'Brief summary';
	$scope.feedback = 'What went well?';
	$scope.valuestate = 'Value statements used';
	$scope.improvement = 'Areas for improvement';
}


angular.module('myApp.controllers', [])//.
 // controller('MyCtrl1', [function() {

 //}])
  //.controller('MyCtrl2', [function() {

  //}])
  //.controller('MyCtrl3', [function(){
  //}])
  //.controller('MyCtrl4', [function(){
  //}])
  //.controller('MyCtrl5', [function(){
  //}])
  //.controller('MyCtrl6', [function(){
  //}])
  .controller('MyCtrl7', [function(){
  }]);
  //.controller('MyCtrl8', [function(){
  //}]);
  