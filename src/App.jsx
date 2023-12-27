import iconDollar from './assets/icon-dollar.svg'
import iconPerson from './assets/icon-person.svg'
import React from 'react'

class App extends React.Component { 

  state = {
    bill: '0',
    people: '0',
    tips: '0',
    custom: '0',
    amount: '0.00',
    total: '0.00'
  }

  getBill = (event) => {
    console.log(event.target.value)
    this.setState({ bill: event.target.value })
  }

  getPeople = (event) => {
    console.log(event.target.value)
    this.setState({ people: event.target.value })
  }

  getCustom = (event) => {
    console.log(event.target.value)
    this.setState({ 
      custom: event.target.value / 100,
      tips: '1'
    })
  }

  getTips = (event) => {
    console.log(event.target.value)
    this.setState({
       tips: event.target.placeholder,
       custom: '1'
     })
     document.getElementById('custom').value = ''
  }

  calculate = (event) => {
    if(event.keyCode == 13) {
      if (this.state.people === '0'){
        document.getElementById('warning').innerHTML = "Can't be zero" 
      } else if (this.state.bill == '0'){
        document.getElementById('warning').innerHTML = "Can't be zero"        
      } else {
        document.getElementById('warning').innerHTML = "" 
        const gotBill = parseFloat(this.state.bill)
        const gotTip = parseFloat(this.state.tips)
        const gotPeople = parseInt(this.state.people)
        const gotCustom = parseFloat(this.state.custom)
    
        console.log(gotBill)
        console.log(gotPeople)
        console.log(gotTip)
    
        const gotAmount = (gotBill * gotTip * gotCustom) / gotPeople
        const gotTotal = (gotBill / gotPeople) + gotAmount
        this.setState({
          amount: gotAmount.toFixed(2),
          total: gotTotal.toFixed(2)
        })
      }
    }
  }

  reset = () => {
    document.getElementById('bill').value= ''
    document.getElementById('custom').value= ''
    document.getElementById('people').value= ''
    this.setState({ 
      bill: '0',
      people: '0',
      tips: '0',
      custom: '0',
      amount: '0.00',
      total: '0.00'
     })
  }

  render() {
    return (
      <div onKeyDown={(event) => this.calculate(event) } className="flex flex-col items-center gap-10">
        <div>
          <h1 className="uppercase text-xl font-normal w-20 tracking-widest">spli tter</h1>
        </div>
        <div className="bg-white w-app h-90 rounded-3xl p-8 flex gap-10 max-sm:flex-col max-sm:w-60 max-sm:h-auto max-sm:p-3 max-sm:rounded-lg">
          <div className="w-1/2 h-full flex flex-col justify-between max-sm:w-auto max-sm:h-auto">
            <div className='relative'>
              <label htmlFor="bill" className='text-DarkGrayishCyan'>Bill</label>
              <input onChange={ (event) => this.getBill(event) } id='bill' type="number" placeholder='0' className=" w-full h-10 px-5 text-lg rounded-md bg-VeryLightGrayishCyan text-VeryDarkCyan text-right"/>
              <img src={iconDollar} alt="icon-logo" className=' absolute w-3 top-9 left-3' />
            </div>
            <div className='text-DarkGrayishCyan max-sm:py-2'>select tip %</div>
            <div className="choice-box flex flex-col gap-3 text-DarkGrayishCyan max-sm:flex-row max-sm:mb-2">
              <div className="flex justify-between max-sm:flex-col max-sm:gap-2">
                <input onClick={ (event) => this.getTips(event) } type='button' value='5%' placeholder='0.05'  className=" bg-VeryDarkCyan w-24 h-9 rounded-sm text-white cursor-pointer hover:bg-LightGrayishCyan hover:text-VeryDarkCyan" />
                <input onClick={ (event) => this.getTips(event) } type='button' value='10%' placeholder='0.1'  className=" bg-VeryDarkCyan w-24 h-9 rounded-sm text-white cursor-pointer hover:bg-LightGrayishCyan hover:text-VeryDarkCyan" /> 
                <input onClick={ (event) => this.getTips(event) } type='button' value='15%' placeholder='0.15'  className=" bg-VeryDarkCyan w-24 h-9 rounded-sm text-white cursor-pointer hover:bg-LightGrayishCyan hover:text-VeryDarkCyan" />            
              </div>
              <div className="flex justify-between max-sm:flex-col max-sm:gap-2">
                <input onClick={ (event) => this.getTips(event) } type='button' value='25%' placeholder='0.25'  className=" bg-VeryDarkCyan w-24 h-9 rounded-sm text-white cursor-pointer hover:bg-LightGrayishCyan hover:text-VeryDarkCyan" /> 
                <input onClick={ (event) => this.getTips(event) } type='button' value='50%' placeholder='0.5' className=" bg-VeryDarkCyan w-24 h-9 rounded-sm text-white cursor-pointer hover:bg-LightGrayishCyan hover:text-VeryDarkCyan" /> 
                <input onChange={ (event) => this.getCustom(event) } id='custom' type="number" placeholder='Custom %' className="bg-VeryLightGrayishCyan w-24 h-9 rounded-sm cursor-pointer hover:bg-LightGrayishCyan text-VeryDarkCyan text-center" />
              </div>
            </div>
            <div>
              <label htmlFor="bill" className='text-DarkGrayishCyan flex justify-between max-sm:flex-col'>Number of People <span id='warning' className='text-red-400 max-sm:text-xs'></span></label> 
              <div className='relative'>
                <input onChange={ (event) => this.getPeople(event) } id='people' type="number" placeholder='0' className=" w-full h-10 px-5 text-lg rounded-md bg-VeryLightGrayishCyan text-VeryDarkCyan text-right relative"/>
                <img src={iconPerson} alt="icon-logo" className=' absolute w-3 top-3 left-3' />
              </div>
              <p className='text-xs text-slate-300 text-center'>Press Enter to get result</p>
            </div>
          </div>
          <div className=" bg-VeryDarkCyan w-1/2 h-full rounded-xl flex flex-col p-7 gap-10 max-sm:w-full max-sm:p-2">
            <div className='flex justify-between items-center'>
              <div className="text-white text-sm ">
                Tip Amount
                <p className='text-xs text-gray-300'>/person</p>
              </div>
              <div className='text-4xl max-sm:text-3xl text-strongCyan'>${this.state.amount}</div>
            </div>
            <div className='flex justify-between items-center'>
              <div className="text-white text-sm ">
                Total
                <p className='text-xs text-gray-300'>/person</p>
              </div>
              <div className='text-4xl max-sm:text-3xl text-strongCyan'>${this.state.total}</div>
            </div>
            <input onClick={ () => this.reset() } type="button" value="Reset" className='bg-DarkGrayishCyan text-VeryDarkCyan w-full h-9 mt-12 max-sm:mt-0 rounded-md cursor-pointer hover:bg-LightGrayishCyan' />
          </div>
        </div>
      </div>
    )
  }
  
}

export default App

