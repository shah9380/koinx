import React, { useEffect, useState } from 'react';
import sound from '../../assets/shooting-sound.mp3';
import keysound from '../../assets/keytick.mp3';
import './Home.css';
import { Select, Option } from "@material-tailwind/react";


function Home() {
    const [activeTerm, setActiveTerm] = useState(true);
    const [audio] = useState(new Audio(sound));
    const [key] = useState(new Audio(keysound));

    const[purchasePrice, setPurchasePrice] = useState();
    const[salePrice, setSalePrice] = useState();
    const[expenses,setExpenses] = useState();
    const[netCapitalGains, setNetCapitalGains] = useState(0);
    const[capitalGains,setCapitalGains] = useState(0);
    const[discount, setDiscount] =useState(0);
    const[tax,setTax] = useState(0);
    const[displayRate, setDisplayRate] = useState("0%");

    const annualIncome = [
        {
            value: 0,
            option: "$0 - $18,200",
            display: "0%"
        },
        {
            value: 18201,
            option: "$18,201 - $45,000",
            display: "Nil + 19% of the excess over $18,200"
        },
        {
            value: 45001,
            option: "$45,001 - $120,000",
            display: "$5,092 + 32.5% of the excess over $45,000"
        },
        {
            value: 120001,
            option: "$120,001 - $180,000",
            display: "$29,467 + 37% of the excess over $120,000"
        },
        {
            value: 180001,
            option: "$180,001+",
            display: "$51,667 + 45% of the excess over $180,000"
        }
    ];
    // Set the initial value to the first option's value
    const [income, setIncome] = React.useState(annualIncome[0].value);
    // Set the initial value to the first option's value
    const [finacialYear, setFinancialYear]= useState("FY 2023-24");

    const handleFinancialYear = (event) =>{
        setFinancialYear((event));
    }    

    const playAudio = () => {
        audio.play();
    };

    const playKeySound = () => {
        key.play();
    };

    const activatingTerm = (value) => {
        if (value === "short") {
            setActiveTerm(true);
            playAudio();
        } else if (value === "long") {
            setActiveTerm(false);
            playAudio();
        }
    };
    const handleChange = (event)=>{
        setIncome(event)
    }

    useEffect(()=>{
            calculation();
    },[salePrice, purchasePrice, expenses, income, activeTerm, netCapitalGains, capitalGains, tax, discount])


    const handleInputChange = (event)=>{
        const{name, value} = event.target;
        if(name === "purchase"){
            setPurchasePrice(value);
        }else if(name === "sale"){
            setSalePrice(value);
        }else if(name === "expenses"){
            setExpenses(value);
        }else if(name === "annualIncome"){
            setIncome(value);
        }
    }
    const calculation = ()=>{
        const gainCapital = (salePrice - purchasePrice - expenses).toFixed(2);
        let taxRate = 0;
        switch(income){
            case annualIncome[0].value:
                taxRate = 0;
                setDisplayRate(annualIncome[0].display)
                break;
            case annualIncome[1].value:
                taxRate = 19;
                setDisplayRate(annualIncome[1].display)
                break;
            case annualIncome[2].value:
                taxRate = 32.5;
                setDisplayRate(annualIncome[2].display)
                break;
            case annualIncome[3].value:
                taxRate = 37;
                setDisplayRate(annualIncome[3].display)
                break;
            case annualIncome[4].value:
                taxRate = 45;
                setDisplayRate(annualIncome[4].display)
                break;
            default:
                taxRate = 0;
                setDisplayRate(annualIncome[0].display)
                break;
        }
        setCapitalGains(gainCapital);
        if(activeTerm){
            setCapitalGains(gainCapital);
            if(salePrice>=0 && purchasePrice>=0 && expenses>=0){
                setNetCapitalGains(capitalGains);
                setTax(((netCapitalGains/100) * taxRate).toFixed(2));
            }
        }else{
            setCapitalGains(gainCapital);
            if(gainCapital>=0){
                setDiscount(gainCapital/2);
            }else{
                setDiscount(0);
            }
            if(salePrice>=0 && purchasePrice>=0 && expenses>=0){
                setNetCapitalGains(capitalGains-discount);
                setTax(((netCapitalGains/100) * taxRate).toFixed(2));
            }
        }
        
    }
    return (
        <main className='max-w-[1325px] mx-auto p-2 md:p-0 md:pt-8'>
            <section className='calculator w-[100%] md:max-w-[70%] bg-white px-2 md:px-16 py-10 rounded-md'>
                <h1 className='text-2xl text-center font-semibold pb-4'>Free Crypto Tax Calculator Australia</h1>
                <div className='flex justify-between items-center gap-8 py-6 w-[100%]'>
                    <div className='flex flex-col md:flex-row md:items-center gap-1 w-[50%] md:gap-2 md:w-[50%]'>
                        <label>Financial Year</label>
                        <div className="lab grow">
                            <Select className='md:w-[100%] text-black rounded-sm selection bg-gray-300/50 border-none' value={finacialYear} onChange={handleFinancialYear}>
                                        <Option className='outline-none'  value="FY 2023-24">
                                            FY 2023-24
                                        </Option>
                            </Select>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:items-center gap-1 gap-2 w-[50%] md:w-[50%]'>
                        <label>Country</label>
                        <div className="lab grow">
                            <Select className='md:w-[100%] text-black rounded-sm selection bg-gray-300/50 border-none' value={finacialYear} onChange={handleFinancialYear}>
                                        <Option className='outline-none'  value="FY 2023-24">
                                            <div className='flex justify-start items-center'><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_0_281)">
                                                <path d="M12 0.75V4.5H4.5V12H0.75C0.75 18.225 5.775 23.25 12 23.25C18.225 23.25 23.25 18.225 23.25 12C23.25 5.775 18.225 0.75 12 0.75Z" fill="#0052B4"/>
                                                <path d="M12 0.75C10.2375 0.75 8.5875 1.1625 7.0875 1.875V4.125H4.125V7.0875H1.875C1.1625 8.5875 0.75 10.2375 0.75 12H5.25V6.375L9.75 12H12V9.1875L8.85 5.25H12V0.75Z" fill="white"/>
                                                <path d="M5.77539 5.25L11.2504 12H12.0004V10.1625L8.02539 5.25H5.77539Z" fill="#ED4C5C"/>
                                                <path d="M12 1.875H7.0875C4.8375 2.9625 2.9625 4.8375 1.875 7.0875V12H4.125V4.125H12V1.875Z" fill="#ED4C5C"/>
                                                <path d="M3 13.3875L3.825 12.375L3.5625 13.6875L4.875 13.725L3.7125 14.325L4.5 15.375L3.3375 14.85L3 16.125L2.6625 14.85L1.5 15.375L2.2875 14.325L1.125 13.725L2.4375 13.6875L2.175 12.375L3 13.3875ZM19.5 7.575L20.175 6.75L19.95 7.8L21 7.8375L20.0625 8.325L20.7 9.15L19.7625 8.7L19.5 9.75L19.2375 8.7L18.3 9.15L18.9375 8.325L18 7.8375L19.05 7.8L18.825 6.75L19.5 7.575ZM19.5 15.075L20.175 14.25L19.95 15.3L21 15.3375L20.0625 15.825L20.7 16.65L19.7625 16.2L19.5 17.25L19.2375 16.2L18.3 16.65L18.9375 15.825L18 15.3375L19.05 15.3L18.825 14.25L19.5 15.075ZM15.75 9.825L16.425 9L16.2 10.05L17.25 10.0875L16.3125 10.575L16.95 11.4L16.0125 10.95L15.75 12L15.4875 10.95L14.55 11.4L15.1875 10.575L14.25 10.0875L15.3 10.05L15.075 9L15.75 9.825Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_0_281">
                                                <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                            </span><span>Australia</span></div>
                                        </Option>
                            </Select>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col gap-6 py-6'>
                    <div className='flex flex-col md:flex-row justify-between gap-8'>
                    <div className='md:w-[50%]'>
                        <label htmlFor="the-input">Enter purchase price of Crypto</label>
                        <div className='the-input bg-gray-300/50 flex rounded-sm'>
                            <span className='p-2'>$</span>
                            <input name='purchase' onChange={handleInputChange} min={0} onInput={playKeySound} type="number" className='input w-full bg-transparent border-none outline-none'/>
                        </div>
                    </div>
                    <div className='md:w-[50%]'>
                        <label htmlFor="the-input">Enter sale price of Crypto</label>
                        <div className='the-input bg-gray-300/50 flex rounded-sm'>
                            <span className='p-2'>$</span>
                            <input name='sale' onChange={handleInputChange} min={0} onInput={playKeySound} type="number" className='input w-full bg-transparent border-none outline-none'/>
                        </div>
                    </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between gap-8'>
                        <div className='md:w-[50%]'>
                            <label htmlFor="the-input">Enter your Expenses</label>
                            <div className='the-input bg-gray-300/50 flex rounded-sm  '>
                                <span className='p-2'>$</span>
                                <input name='expenses' onChange={handleInputChange} min={0} onInput={playKeySound} type="number" className='input w-full bg-transparent border-none outline-none'/>
                            </div>
                        </div>
                        <div className='md:w-[50%]'>
                            <label htmlFor="investment-type">Investment Type</label>
                            <div className='flex justify-between gap-4'>
                                <div onClick={() => activatingTerm("short")} className='grow w-[50%]'>
                                    <div style={{border: `${activeTerm ? '2px solid blue' : '1px solid black'}`}} className='min-h-10 min-w-30 md:min-w-32 border border-black flex gap-4 cursor-pointer justify-between items-center rounded-md'>
                                        <p>Short Term</p>
                                        {activeTerm && (
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M27.9998 9.33337L11.9998 25.3334L4.6665 18L6.5465 16.12L11.9998 21.56L26.1198 7.45337L27.9998 9.33337Z" fill="#0141CF"/>
                                            </svg>
                                        )}
                                    </div>
                                    <small>&lt;12months</small>
                                </div>
                                <div onClick={() => activatingTerm("long")} className='grow w-[50%]'>
                                    <div style={{border: `${!activeTerm ? '2px solid blue' : '1px solid black'}`}} className='min-h-10 min-w-30 md:min-w-32 border border-black flex gap-4 cursor-pointer justify-between items-center rounded-md'>
                                        <p>Long Term</p>
                                        {!activeTerm && (
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M27.9998 9.33337L11.9998 25.3334L4.6665 18L6.5465 16.12L11.9998 21.56L26.1198 7.45337L27.9998 9.33337Z" fill="#0141CF"/>
                                            </svg>
                                        )}
                                    </div>
                                    <small>&gt;12months</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between gap-1 md:gap-8'> 
                        <div className='md:w-[50%]'>
                            <label htmlFor="AnnualIncome">Select Your Annual Income</label>
                            <div className="lab">
                                <Select name='annualIncome' className='text-black rounded-sm selection bg-gray-300/50 border-none' value={income} onChange={handleChange}>
                                    {annualIncome.map((data) => (
                                        <Option className='outline-none' key={data.value} value={data.value}>
                                            {data.option}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className='flex justify-start items-center md:w-[50%]'>
                            <small className='flex md:flex-col'><span>Tax Rate<span className='md:hidden mx-1'>:</span></span><span>{displayRate}</span></small> 
                        </div> 
                    </div>
                    {   
                        !activeTerm &&
                        (<div className='flex flex-col md:flex-row justify-between gap-8'>
                            <div className='md:w-[50%]'>
                                <label htmlFor="the-input">Capital gains amount</label>
                                <div className='the-input bg-gray-300/50 flex rounded-sm  '>
                                    <span className='p-2'>$</span>
                                    <input onInput={playKeySound} disabled type="number" className='input w-full bg-transparent border-none outline-none' value={capitalGains}/>
                                </div>
                            </div>
                            <div className='md:w-[50%]'>
                                <label htmlFor="the-input">Discount for long term gains</label>
                                <div className='the-input bg-gray-300/50 flex rounded-sm  '>
                                    <span className='p-2'>$</span>
                                    <input onInput={playKeySound} disabled type="number" className='input w-full bg-transparent border-none outline-none' value={discount}/>
                                </div>
                            </div>
                        </div>)
                    }
                    <div className='flex flex-col md:flex-row items-center justify-center md:justify-between gap-8'>
                        <div className='bg-[#EBF9F4] w-[70%] md:w-[50%] text-center p-2 rounded-md'>
                            <h4>Net Capital gains tax amount</h4>
                            <strong className='text-[rgb(15,186,131)]'>$ {netCapitalGains}</strong>
                        </div>
                        <div className='bg-[#EBF2FF] w-[70%] md:w-[50%] text-center p-2 rounded-md'>
                            <h4>The tax you need to pay*</h4>
                            <strong className='text-[rgb(1,65,207)]'>$ {tax}</strong>
                        </div>
                    </div>
                </div>  
            </section>
        </main>
    );
}

export default Home;
