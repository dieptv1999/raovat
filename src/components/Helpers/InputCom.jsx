export default function InputCom({
                                     label,
                                     type,
                                     name,
                                     placeholder,
                                     children,
                                     inputHandler,
                                     onBlur,
                                     value,
                                     inputClasses,
                                     required = false,
                                     disabled = false,
                                     labelClasses = "text-qgray text-[13px] font-normal",
                                     error = '',
                                     inputType = 'input',
                                     minValue = 0
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
                {inputType === 'input' ? <input
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                    min={minValue}
                    onChange={inputHandler}
                    className={`input input-bordered placeholder:text-sm text-sm px-6 py-3 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none ${
                        inputClasses || ""
                    } ${error ? 'input-error' : ''}`}
                    onBlur={onBlur}
                    type={type}
                    name={name}
                    id={name}
                />
                    : <textarea
                        placeholder={placeholder}
                        disabled={disabled}
                        value={value}
                        onChange={inputHandler}
                        className={`textarea textarea-bordered placeholder:text-sm text-sm px-6 py-3 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none ${
                            inputClasses || ""
                        } ${error ? 'textarea-error' : ''}`}
                        onBlur={onBlur}
                        name={name}
                        id={name}
                />}
                {children && children}
            </div>
            {error ? <label className="label">
                <span className="label-text-alt text-red-500">{error}</span>
            </label> : <div/>}
        </div>
    );
}
