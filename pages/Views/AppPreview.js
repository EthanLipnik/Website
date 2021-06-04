import * as React from 'react'
import Link from 'next/link'

export default class AppPreview extends React.Component {
    render() {
        return (
            <Link href={"/apps/" + (this.props.appName ? this.props.appName.toLowerCase() : '')}>
                <div className="cursor-pointer w-full bg-gray-200 dark:bg-gray-600 flex justify-center items-center rounded">
                    <div className={`cursor-pointer bg-gradient-to-b from-${(this.props.gradient ? this.props.gradient[0] : 'bg-blue-300')} to-${(this.props.gradient ? this.props.gradient[1] : 'bg-blue-500')} w-full flex relative z-0 transform transition-transform duration-500 ease-in-out ${this.props.reversedRotation ? "rotate-2 hover:-rotate-1" : "-rotate-2 hover:rotate-1"} rounded shadow${this.props.appName ? '-' + this.props.appName.toLowerCase() : ''} p-8`}>
                        <div className={`lg:flex w-full transform transition-transform ${this.props.reversedRotation ? "-rotate-2" : "rotate-2"}`}>
                            <div className="bg-white dark:bg-gray-700 bg-opacity-70 md:bg-opacity-100 rounded shadow w-auto lg:w-1/3 h-full p-4 z-10 my-auto">
                                <img src={this.props.imageURL} alt={this.props.appName} width={140} height={140} className={`mx-auto rounded shadow${this.props.appName ? '-' + this.props.appName.toLowerCase() : ''} m-5`} />
                                <h3 className="text-center text-3xl font-bold select-none">{this.props.appName}</h3>
                            </div>
                            <div className="bg-white dark:bg-gray-700 bg-opacity-70 rounded shadow w-full lg:w-7/12 h-full z-0 ml-auto hidden md:block">
                                <p className="text-center text-2xl m-8 p-4 select-none">{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}