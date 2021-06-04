import * as React from 'react'

export default class DetailView extends React.Component {
    render() {
        return (
            <div className="lg:w-1/2 bg-gray-200 dark:bg-gray-600 justify-center items-center rounded">
                <div className={`bg-gradient-to-b from-${(this.props.gradient ? this.props.gradient[0] : 'bg-blue-300')} to-${(this.props.gradient ? this.props.gradient[1] : 'bg-blue-500')} w-full relative z-0 transform transition-transform duration-500 ease-in-out ${this.props.reversedRotation ? "rotate-2 hover:-rotate-1" : "-rotate-2 hover:rotate-1"} rounded shadow${this.props.appTitle ? "-" + this.props.appTitle.toLowerCase() : ""} p-8`}>
                    <div className={`w-full space-y-5 transform transition-transform ${this.props.reversedRotation ? "-rotate-2" : "rotate-2"}`}>
                        <h1 className="w-full text-3xl text-white font-bold">{this.props.title}</h1>
                        <p className="w-full text-1xl text-white">{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}