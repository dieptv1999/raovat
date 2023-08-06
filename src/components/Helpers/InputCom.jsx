export default function InputCom({
                                     label,
                                     type,
                                     name,
                                     placeholder,
                                     children,
                                     inputHandler,
                                     value,
                                     inputClasses,
                                     required = false,
                                     disabled = false,
                                     labelClasses = "text-qgray text-[13px] font-normal",
                                 }) {
    return (
        <div className="input-com w-full h-full">
            {label && (
                <label
                    className={`input-label capitalize block  mb-2 ${labelClasses || ""}`}
                    htmlFor={name}
                >
                    {label} {required ? <span className="text-red-500">(*)</span> : <div/>}
                </label>
            )}
            <div className="input-wrapper w-full h-full overflow-hidden relative ">
                <input
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                    onChange={inputHandler}
                    className={`input input-bordered placeholder:text-sm text-sm px-6 py-2 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none ${
                        inputClasses || ""
                    }`}
                    type={type}
                    id={name}
                />
                {children && children}
            </div>
        </div>
    );
}
