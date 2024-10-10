const Modal = ({ open, onClose, children }) => {
    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center z-10 pt-6 items-center transition-colors
          ${open ? "visible bg-black/30" : "invisible"}
        `}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                bg-red-500 justify-center items-center rounded-xl shadow overflow-y-auto p-6 transition-all
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}  w-4/5
            `}>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                >
                    X
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal