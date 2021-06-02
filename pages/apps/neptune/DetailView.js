import * as React from 'react'

export default class DetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            text: props.text,
            reversedRotation: props.reversedRotation
        };
    }

    render() {
        return (
            <div className="lg:w-1/2 bg-gray-200 dark:bg-gray-600 justify-center items-center rounded">
                <div className={`bg-gradient-to-b from-neptune-primary to-neptune-secondary w-full relative z-0 transform transition-transform duration-500 ease-in-out ${this.state.reversedRotation ? "rotate-2 hover:-rotate-1" : "-rotate-2 hover:rotate-1"} rounded shadow-neptune p-8`}>
                    <div className={`w-full space-y-5 transform transition-transform ${this.state.reversedRotation ? "-rotate-2" : "rotate-2"}`}>
                        <h1 className="text-center w-full text-3xl text-white font-bold">{this.state.title}</h1>
                        <p className="w-full text-1xl text-white">{this.state.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}