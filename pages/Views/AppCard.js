import * as React from 'react'

export default class AppCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appName: props.appName,
            reversedRotation: props.reversedRotation,
            imageURL: props.imageURL,
            gradient: props.gradient
        };
    }

    render() {
        return (
            <div className={`cursor-pointer lg:w-full h-xl bg-gray-200 dark:bg-gray-600 flex justify-center items-center rounded mx-4 my-20 lg:my-0 transform transition-transform duration-500 ease-in-out ${this.state.reversedRotation ? "rotate-6" : "-rotate-6"}`}>
                <div className={`cursor-pointer bg-gradient-to-b from-${(this.state.gradient ? this.state.gradient[0] : 'bg-blue-300')} to-${(this.state.gradient ? this.state.gradient[1] : 'bg-blue-500')} w-full h-xl relative z-0 p-8 rounded shadow${this.state.appName ? '-' + this.state.appName.toLowerCase() : ''} p-8 transform transition-transform duration-500 ease-in-out ${this.state.reversedRotation ? "-rotate-6 hover:rotate-3" : "rotate-6 hover:-rotate-3"}`}>
                    <div className="w-full h-full p-4 bg-white dark:bg-gray-400 bg-opacity-70 rounded shadow">
                        <img src={this.state.imageURL} alt={this.state.appName} width={140} height={140} className={`mx-auto rounded shadow${this.state.appName ? '-' + this.state.appName.toLowerCase() : ''} m-5`} />
                        <h3 className="text-center text-3xl font-bold select-none">{this.state.appName}</h3>
                    </div>
                </div>
            </div>
        )
    }
}