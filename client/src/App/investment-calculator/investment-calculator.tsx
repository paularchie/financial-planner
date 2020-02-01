import React, { useState, useEffect } from 'react';
import './investment-calculator.scss';
import { formatNumber } from '../util';

const InvestmentCalculator = () => {

    const monthlySavingsRef = React.createRef<any>();
    const interestRateRef = React.createRef<any>();
    const numberOfYearsRef = React.createRef<any>();

    const [totalSavings, setTotalSavings] = useState(0);
    const [totalCompound, setTotalCompound] = useState(0);
    const [interestGained, setInterestGained] = useState(0);
    const [returns, setReturns] = useState(0);

    const calculate = () => {
        const monthlySavings = +monthlySavingsRef.current.value;
        const monthlyInterestRate = interestRateRef.current.value / 100 / 12;
        const totalNumberOfMonths = numberOfYearsRef.current.value * 12;

        let totalCompoundAmount = 0;
        for (let i = 0; i < totalNumberOfMonths; i++) {
            totalCompoundAmount += monthlySavings + (totalCompoundAmount * monthlyInterestRate)
            console.log(i + 1, totalCompoundAmount * monthlyInterestRate, totalCompoundAmount)
        }

        const totalCompound = Math.round(totalCompoundAmount)
        setTotalCompound(totalCompound);

        const savingsTotal = monthlySavings * totalNumberOfMonths;
        setTotalSavings(savingsTotal);

        const interestGained = totalCompound - savingsTotal;
        setInterestGained(interestGained);

        const roi = Math.round(interestGained / savingsTotal * 100);
        setReturns(roi);

    }


    return (
        <div className="flex space-around">
            <div>
                <div className="flex form-group">
                    <label>Monthly savings</label>
                    <input
                        ref={monthlySavingsRef}
                    />
                </div>

                <div className="flex form-group">
                    <label>Interest Rate</label>
                    <input
                        ref={interestRateRef}
                    />
                </div>

                <div className="flex form-group">
                    <label>Number of Years</label>
                    <input
                        ref={numberOfYearsRef}
                    />
                </div>

                <div className="flex form-group">
                    <label >Total Savings</label>
                    <div>{formatNumber(totalSavings)}</div>
                </div>

                <div className="flex form-group">
                    <label >Interest Gained</label>
                    <div>{formatNumber(interestGained)}</div>
                </div>

                <div className="flex form-group">
                    <label >Total Compound</label>
                    <div>{formatNumber(totalCompound)}</div>
                </div>

                <div className="flex form-group">
                    <label>ROI</label>
                    <div>{formatNumber(returns) + '%'}</div>
                </div>

                <div className="flex form-group space-around">
                    <button onClick={calculate}>Calculate</button>
                </div>
            </div>
        </div>
    )

};

export default InvestmentCalculator;