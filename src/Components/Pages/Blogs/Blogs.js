import React from "react";
import Footer from "../Shared/Footer";

const Blogs = () => {
    return (
        <div>
            <div className="px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-left">
                        <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                        <p>
                        1.Keeping component state local where necessary. <br />
                        2.Memoizing React components to prevent unnecessary re-renders.{" "}
                        <br /> 3.Code-splitting in React using dynamic import(). <br />{" "}
                        4.Windowing or list virtualization in React. <br />
                        5.Lazy loading images in React.
                    </p>
                    </div>
                </div>
                {/* card 2  */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-left">
                        <h2 className="card-title">What are the different ways to manage a state in a React
                        application?</h2>
                        <p>
                        1.Local state. <br />
                        2.Global state. <br /> 3.Server state. <br /> 4.URL state.
                    </p>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-left">
                        <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                        <p>
                        Unit tests are typically automated tests written and run by software
                        developers to ensure that a section of an application meets its
                        design and behaves as intended. In procedural programming, a unit
                        could be an entire module, but it is more commonly an individual
                        function or procedure.
                    </p>
                    </div>
                </div>
                {/* card 4 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-left">
                        <h2 className="card-title">How does prototypical inheritance work?</h2>
                        <p>
                        The Prototypal Inheritance is a feature in javascript used to add
                        methods and properties in objects. It is a method by which an object
                        can inherit the properties and methods of another object.
                    </p>
                    </div>
                </div>
                {/* card 5 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-left">
                        <h2 className="card-title">Why you do not set the state directly in React?</h2>
                        <p>
                        One should never update the state directly because of the following
                        reasons: <br /> If you update it directly, calling the setState()
                        afterward may just replace the update you made. When you directly
                        update the state, it does not change this.state immediately.
                        Instead, it creates a pending state transition, and accessing it
                        after calling this method will only return the present value. You
                        will lose control of the state across all components.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Blogs;
