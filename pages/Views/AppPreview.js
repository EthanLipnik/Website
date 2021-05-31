import * as React from 'react'
import Link from 'next/link'

export default class AppPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appName: props.appName,
            description: props.description,
            reversedRotation: props.reversedRotation,
            imageURL: props.imageURL,
            gradient: props.gradient
        };
    }

    render() {
        return (
            <Link href={"/apps/" + this.state.appName.toLowerCase()}>
                <div className="cursor-pointer w-full bg-gray-200 dark:bg-gray-600 flex justify-center items-center rounded">
                    <div className={`cursor-pointer bg-gradient-to-b from-${(this.state.gradient ? this.state.gradient[0] : 'bg-blue-300')} to-${(this.state.gradient ? this.state.gradient[1] : 'bg-blue-500')} w-full flex relative z-0 transform transition-transform duration-500 ease-in-out ${this.state.reversedRotation ? "rotate-2 hover:-rotate-1" : "-rotate-2 hover:rotate-1"} rounded shadow${this.state.appName ? '-' + this.state.appName.toLowerCase() : ''} p-8`}>
                        <div className={`lg:flex w-full transform transition-transform ${this.state.reversedRotation ? "-rotate-2" : "rotate-2"}`}>
                            <div className="bg-white dark:bg-gray-700 rounded shadow w-auto lg:w-1/3 h-full p-4 z-10 my-auto">
                                <img src={this.state.imageURL} alt={this.state.appName} width={140} height={140} className={`mx-auto rounded shadow${this.state.appName ? '-' + this.state.appName.toLowerCase() : ''} m-5`} />
                                <h3 className="text-center text-3xl font-bold select-none">{this.state.appName}</h3>
                            </div>
                            <div className="bg-white dark:bg-gray-700 bg-opacity-70 rounded shadow w-full lg:w-7/12 h-full z-0 ml-auto">
                                <p className="text-center text-2xl m-8 p-4 select-none">{this.state.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}