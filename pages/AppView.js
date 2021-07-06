import * as React from 'react'
import DetailView from './Views/DetailView'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default class AppView extends React.Component {
    imageURL = (path) => {
        return "https://res.cloudinary.com/dz3gbu49x/image/upload/" + path
    }

    render() {
        return (
            <div className="container mx-auto md:px-40 px-5 py-10">
                <AppPopover />
                <div>
                    <img src={this.imageURL(this.props.icon ? this.props.icon : "")} width={330} height={330} className={`rounded-app shadow${this.props.title ? "-" + this.props.title.toLowerCase() : ""} mx-auto`} />
                    <div className="p-8">
                        {this.props.title ? <h1 className="text-5xl text-center font-bold">{this.props.title}</h1> : null}
                        {this.props.subtitle ? <h2 className="text-3xl text-center">{this.props.subtitle}</h2> : null}
                    </div>
                    <a href={this.props.link ? this.props.link : "/failedToGetLink"} target={this.props.link ? "_blank" : null}>
                        <div className={`mx-auto bg-gradient-to-b from-${this.props.title ? this.props.title.toLowerCase() : "neptune"}-primary to-${this.props.title ? this.props.title.toLowerCase() : "neptune"}-secondary shadow${this.props.title ? "-" + this.props.title.toLowerCase() : ""} rounded md:w-1/2 lg:w-1/4 w-full py-4 transform transition-transform duration-500 ease-in-out scale-100 hover:scale-90`}>
                            <h1 className="text-center text-4xl font-bold text-white">{this.props.isBeta ? "Join the beta" : "Get now"}</h1>
                        </div>
                    </a>
                </div>
                {this.props.details ? <div className="space-y-10 pt-20">
                    <DetailView title={this.props.details[0].title} text={this.props.details[0].text} appTitle={this.props.title} gradient={this.props.title ? [this.props.title.toLowerCase() + "-primary", this.props.title.toLowerCase() + "-secondary"] : []} />
                    <div className="flex">
                        <div className="lg:w-1/2" />
                        <DetailView reversedRotation={true} title={this.props.details[1].title} text={this.props.details[1].text} appTitle={this.props.title} gradient={this.props.title ? [this.props.title.toLowerCase() + "-primary", this.props.title.toLowerCase() + "-secondary"] : []} />
                    </div>
                    <DetailView title={this.props.details[2].title} text={this.props.details[2].text} appTitle={this.props.title} gradient={this.props.title ? [this.props.title.toLowerCase() + "-primary", this.props.title.toLowerCase() + "-secondary"] : []} />
                </div> : null}
                <Link href={"/apps/" + (this.props.title ? this.props.title.toLowerCase() : '') + "/privacy"}>
                    <h3 className="my-20">Privacy Policy</h3>
                </Link>
            </div>
        )
    }
}

function AppPopover() {
    return (
        <Menu as="div" className="relative inline-block text-left rounded shadow">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            Apps
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-56 rounded shadow bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                        >
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="/"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Home
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="/apps/neptune"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Neptune
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="/apps/syndromi"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Syndromi
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="/apps/kairos"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Kairos
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="https://sakka.app"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Sakka
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="https://kano.today"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Kano
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}