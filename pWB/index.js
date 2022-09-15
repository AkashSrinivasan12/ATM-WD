  let totalAmount=20000;

	  let withdarawalBtn=document.getElementById('withdarawal');
	  let billPay=document.getElementById('billPay');
	  let ballanceInquiryBtn=document.getElementById('ballanceInquiry');
	  let ref=document.getElementById('ref');
	  let btnReff=document.getElementById('btnReff');

	  let transferBtn=document.getElementById('transfer');
	  let depositBtn=document.getElementById('deposit');
	  let otherTransaction=document.getElementById('otherTransaction');
	  let firstText=document.getElementById('firstText');
	  let firstText2=document.getElementById('firstText2');

	  let Exit=document.getElementById('Exit');
	  let btnOK=document.getElementById('btnOK');
	  let btnOK2=document.getElementById('btnOK2');
	  let amounts=document.getElementById('amounts');
	  let secondText=document.getElementById('secondText');

	  let secondText2=document.getElementById('secondText2');
 	  let amount=document.getElementById('amount');
          let amount2=document.getElementById('amount2');
          let doubleTransactions=document.getElementById('doubleTransactions');
          let  amountIn=document.getElementById('amountIn').value;

	  let back=document.getElementById('back');
 	  let lin1=document.getElementById('lin1');
	  let lin2=document.getElementById('lin2');
	  let transactions=document.getElementById('transactions');
	  let btnsSecreen=document.getElementById('btnsSecreen');
  
	  let pin1=document.getElementById('pin1').value;
	  let btnEnter=document.getElementById('btnEnter');
	  let pas=document.getElementById('pas');
	  let num=document.getElementById('num');
	  let pinMsg=document.getElementById('pinMsg');

	  let billPayDiv=document.getElementById('billPayDiv');
 	  let pinDiv=document.getElementById('pinDiv');
	  let pinHeading=document.getElementById('pinHeading');
       
         withdarawalBtn.onclick=withdarawal;

  function withdarawal(){

  btnsSecreen.style.display="none";
  transactions.style.display="block";
  firstText.innerHTML="PLEASE ENTER THE AMOUNT ";

  }

  btnOK.onclick=OK;
  function OK(){
  let  amountIn=document.getElementById('amountIn').value;
  if(amountIn<totalAmount){
  secondText.innerHTML="TRANSACTION SUCEED RS"+amountIn;
  amount.innerHTML="REMAINING AMOUNT IN RS"+(totalAmount-amountIn);

 back.innerHTML="BACK TO SCREEN";}
  else{
  secondText.innerHTML="YOU HAVEN'T ENOUGH CREDITS";
  amount.innerHTML="YOUR TOTAL BALANCE IS RS"+totalAmount;
  back.innerHTML="BACK TO MAIN SCREEN";}

  }

  btnOK2.onclick=OK2;
  function OK2(){
  let  amountIn2=document.getElementById('amountIn2').value;
  if(amountIn2<totalAmount){
  secondText2.innerHTML="TRANSACTION COMPLETED"+amountIn2;
  amount2.innerHTML="REMAINING AMOUNT IS"+(totalAmount-amountIn2);
  back.innerHTML="BACK TO MAIN SCREEN";}
  else{
  secondText2.innerHTML="YOU HAVE'T ENOUGH CREDIT";
  amount2.innerHTML="YOUR TOTAL BALANCE IS Rs"+totalAmount;
  back.innerHTML="BACK TO MAIN SCREEN";}

  }


  lin2.onclick=Back;
  function Back(){
  billPayDiv.style.display="none";
  billPayDiv.style.display="none";
  btnsSecreen.style.display="block";
  }
  btnEnter.onclick=login;
  function login(){
  let pin1=document.getElementById('pin1').value;

   if(pin1==1234){
    pas.style.display="none";
    btnsSecreen.style.display="block";

   }
   else{
    pinMsg.innerHTML="**Password not matched";

   }
  }
  billPay.onclick=billPayment;
  function billPayment(){
  firstText2.innerHTML="PLEASE ENTER BILL REFFEREMCE NO";
  btnsSecreen.style.display="none";
  billPayDiv.style.display="block";


  }

  btnReff.onclick=change;
  function change(){
  ref.style.display="none";
  billIn.style.display="block";
  firstText2.innerHTML=" PLEASE ENTER YOUR TOTAL BILL";


  }



  ballanceInquiry.onclick=billInquiry;
  function billInquiry(){
  btnsSecreen.style.display="none";
  billPayDiv.style.display="none";
  transactions.style.display="block";
  ref.style.display="none";
  amounts.style.display="none";
  firstText.innerHTML="Ballance Inquiry";
  secondText.innerHTML="YOUR TOTAL BALANCE IS RS"+totalAmount;

  }
  transferBtn.onclick=transferMoney;
  function transferMoney(){
  transactions.style.display="none";

  btnsSecreen.style.display="none";
  billPayDiv.style.display="block";
  firstText2.innerHTML="ENTER THE AMOUNT NUMBER";

  }
  depositBtn.onclick=depositMoney;
  function depositMoney(){
  transactions.style.display="block";
  btnsSecreen.style.display="none";
  billPayDiv.style.display="none";
  firstText.innerHTML="Enter your amount";
  btnOK.onclick=function(){
   let pin1=document.getElementById('pin1').value;
   secondText.innerHTML="SUCESSFULLY ADDED RS"+pin1;
   amount.innerHTML="YOUR NEW BALANCE IS RS"+(totalAmount+Number(pin1));


  }

  }
  Exit.onclick=exit;
  function exit(){
  transactions.style.display="none";
  billPayDiv.style.display="none";
  btnsSecreen.style.display="none";
  pas.style.display="block";
  pinDiv.style.display="none";
  pinHeading.innerHTML="THANKS FOR CHOOSING US:)";
  pinMsg.innerHTML="WE DONT COMPROMISE ON CLIENT SAFETY !";

  }

back.onclick=Back;
  function Back(){
  location.reload();
  pas.style.display="block";
  transactions.style.display="none";
  billPayDiv.style.display="none";





  }



