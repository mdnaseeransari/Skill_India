import React from "react";

const Admin = () => {
    return (
        <div className="bg-primary flex flex-col items-center pt-10 gap-2 px-4">
            <h1 className="text-primary text-4xl md:text-3xl sm:text-2xl font-bold">
                Add New Course
            </h1>

            <h2 className="text-secondary text-xl md:text-lg sm:text-base text-center">
                Create a new course for the platform
            </h2>

            {/* FORM START */}
            <form className="border border-color rounded p-6 w-full max-w-[600px] my-6">

                <h1 className="text-primary text-2xl md:text-xl sm:text-lg font-bold">
                    Course Details
                </h1>

                <h2 className="text-secondary text-xl md:text-lg sm:text-base pb-5">
                    Fill in the information for the new course
                </h2>

                {/* TITLE */}
                <label className="text-primary block">Title *</label>
                <input
                    type="text"
                    required
                    placeholder="Title of the course"
                    className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                />

                {/* PRICE + RATING */}
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="w-full">
                        <label className="text-primary block">Price *</label>
                        <input
                            type="number"
                            required
                            placeholder="Price of the course"
                            className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                        />
                    </div>

                    <div className="w-full">
                        <label className="text-primary block">Rating *</label>
                        <input
                            type="number"
                            required
                            placeholder="Rating of the course"
                            className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                        />
                    </div>
                </div>

                {/* STUDENTS + DURATION */}
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="w-full">
                        <label className="text-primary block">Student Enrolled *</label>
                        <input
                            type="number"
                            required
                            placeholder="1000"
                            className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                        />
                    </div>

                    <div className="w-full">
                        <label className="text-primary block">Duration *</label>
                        <input
                            type="text"
                            required
                            placeholder="10 Hours"
                            className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                        />
                    </div>
                </div>

                {/* LEVEL + CATEGORY */}
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="w-full">
                        <label className="text-primary block">Level *</label>
                        <input
                            type="text"
                            required
                            placeholder="Beginner"
                            className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                        />
                    </div>

                    <div className="w-full">
                        <label className="text-primary block">Category *</label>
                        <input
                            type="text"
                            required
                            placeholder="Web Development"
                            className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                        />
                    </div>
                </div>

                {/* DESCRIPTION */}
                <label className="text-primary block mt-4">Description *</label>
                <textarea
                    required
                    placeholder="Description of the course"
                    className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                    rows={3}
                />

                {/* IMG URL */}
                <label className="text-primary block mt-4">Img URL *</label>
                <input
                    type="text"
                    required
                    placeholder="Image URL"
                    className="bg-secondary pl-3 py-2 text-primary rounded w-full placeholder:text-gray-400 mt-2 border border-color"
                />

                {/* BUTTON */}
                <button
                    type="submit"
                    className="bg-accent-primary mt-5 w-full p-3 rounded text-primary hover:bg-accent-primary"
                >
                    Add Course
                </button>

            </form>
        </div>
    );
};

export default Admin;
