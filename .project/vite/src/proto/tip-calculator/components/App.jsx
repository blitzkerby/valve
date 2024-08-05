import React , { Component } from 'react';

class TipCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bill: 0,
            percentage1: 0,
            percentage2: 0
        };
    }

    setBill = (event) => {
        this.setState({ bill: Number(event.target.value) });
    }

    selectPercentage1 = (event) => {
        this.setState({ percentage1: Number(event.target.value) });
    }

    selectPercentage2 = (event) => {
        this.setState({ percentage2: Number(event.target.value) });
    }

    render() {
        const { bill, percentage1, percentage2 } = this.state;
        const tip = bill * (percentage1 + percentage2) / (2 * 100);

        return (
            <div>
                <BillInput bill={bill} setBill={this.setBill} />
                <SelectPercentage percentage={percentage1} selectPercentage={this.selectPercentage1}> How did you like the service? </SelectPercentage>
                <SelectPercentage percentage={percentage2} selectPercentage={this.selectPercentage2}> How did your friend like the service? </SelectPercentage>
                <Output bill={bill} tip={tip} />
                <Reset />
            </div>
        );
    }
}

class BillInput extends Component {
    render() {
        const { bill, setBill } = this.props;
        return (
            <div>
                <label>How much was the bill?</label>
                <input type="number" onChange={setBill} />
            </div>
        );
    }
}

class SelectPercentage extends Component {
    render() {
        const { percentage, selectPercentage, children } = this.props;
        return (
            <div>
                <label>{children}</label>
                <select value={percentage} onChange={selectPercentage}>
                    <option value={0}>Very dissatisfied (0%)</option>
                    <option value={5}>Dissatisfied (5%)</option>
                    <option value={10}>Neutral (10%)</option>
                    <option value={15}>Satisfied (15%)</option>
                    <option value={20}>Very satisfied (20%)</option>
                </select>
            </div>
        );
    }
}

class Output extends Component {
    render() {
        const { bill, tip } = this.props;
        return <h3>You pay ${bill + tip} (${bill} + ${tip})</h3>;
    }
}

class Reset extends Component {
    render() {
        return <button>Reset</button>;
    }
}

export default TipCalculator;
