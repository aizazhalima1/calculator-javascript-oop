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
        
        }
     
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

