import * as React from 'react'

export default class DetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            text: props.text,
            appTitle: props.appTitle,
            reversedRotation: props.reversedRotation,
            gradient: props.gradient
        };
    }

    render() {
        return (
            <div className="lg:w-1/2 bg-gray-200 dark:bg-gray-600 justify-center items-center rounded">
                <div className={`bg-gradient-to-b from-${(this.state.gradient ? this.state.gradient[0] : 'bg-blue-300')} to-${(this.state.gradient ? this.state.gradient[1] : 'bg-blue-500')} w-full relative z-0 transform transition-transform duration-500 ease-in-out ${this.state.reversedRotation ? "rotate-2 hover:-rotate-1" : "-rotate-2 hover:rotate-1"} rounded shadow${this.state.appTitle ? "-" + this.state.appTitle.toLowerCase() : ""} p-8`}>
                    <div className={`w-full space-y-5 transform transition-transform ${this.state.reversedRotation ? "-rotate-2" : "rotate-2"}`}>
                        <h1 className="w-full text-3xl text-white font-bold">{this.state.title}</h1>
                        <p className="w-full text-1xl text-white">{this.state.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}