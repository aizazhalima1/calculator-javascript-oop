const numberButtons=document.querySelectorAll('[data-number]')
const operandButtons=document.querySelectorAll('[data-operand]')
const equalButton=document.querySelector('[data-equal]')
const previousOperandTextElement=document.querySelector('[data-previous]')
const currentOperandTextElement=document.querySelector('[data-current]')


class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        this.currentOperand=''
        this.operation=undefined
        this.previousOperand=''
        
        
        
        
    }
    
   
    appendNumber(number){
        if(this.currentOperand.includes('.') && number=='.')return
        this.currentOperand=this.currentOperand.toString()+number.toString()
        this.previousOperand=this.previousOperand
        
          
       // }
       // else{
       //this.currentOperand=this.currentOperand.toString()+number.toString()
       //}
       
        }
      //  appendNumber(number){
      //      if(this.previousOperand==''){
      //          this.previousOperand=this.currentOperand
      //          this.currentOperand=this.currentOperand+number.toString()}
      //          else{
      //              this.previousOperand=this.previousOperand
      //              this.currentOperand=number
      //          }
      //     
      //      }
    chooseOperation(operation){
        if(this.currentOperand=='')return
        if(this.previousOperand!==''){
            this.compute()
        }
        this.operation=operation
        this.previousOperand=this.currentOperand
        this.currentOperand=''
    }

    
    compute(){
       
        let computation
        const prev=parseFloat(this.previousOperand)
        const curr=parseFloat(this.currentOperand)
        if(!curr || !prev){return}
        switch(this.operation){
            case'+' :
            computation=prev+curr
            break
            case'*' :
            computation=prev*curr
            break
            case'/' :
            computation=prev/curr
            break
            case'-' :
            computation=prev-curr
            break
            default:
                return

        }
        this.currentOperand=computation
        this.operation=undefined
        this.previousOperand=''



    }
    updateDisplay(){
            this.currentOperandTextElement.innerText=this.currentOperand
            if(this.operation!=null){
                this.previousOperandTextElement.innerText=`${this.previousOperand} ${this.operation}`
            }
            else
            {this.previousOperandTextElement.innerText=this.previousOperand}
    }


}

const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement)
numberButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
        
    })
})

operandButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.value)
        calculator.updateDisplay()

        
       
   })
})
equalButton.addEventListener('click',()=>{
    calculator.compute()
    calculator.updateDisplay()
})




//class Button{
//    constructor(value){
//    this.value=value
//}
//onClick(){
//   console.log('hey this is', this.value)
//}
//}
////
//let Button1=new Button(1)
//let Button2=new Button(2)
//let Button3=new Button(3)
//let Button4=new Button(4)
//let Button5=new Button(5)
//let Button6=new Button(6)
//let Button7=new Button(7)
//let Button8=new Button(8)
//let Button9=new Button(9)
//let Button0=new Button(0)
//
//document.querySelectorAll('button').forEach((button)=>button.addEventListener('click',onClicker))
//
//function onClicker(){
//    let val=event.target.value
//    
//    
//}
//



//