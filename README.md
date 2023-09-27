## Installation
> npm i @dakusy/modal_npm

## Dependency
> npm install to get all the dependency


## Modal npm component 
```js
function Modal({ closeModal }) {
    return (
        // class allowing to show the modal or to not show it.
        <div className={closeModal ? "modal_container" : "modal_display"}>
            <div className="modal_show">
                <p>Votre Employée a été enregistré.</p>
                {/* The click event allow us to change the current state of the modal to false or true to allow it to be closed.*/}
                <div className="close_modal">
                    <p onClick={() => closeModal(false)}>X</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;
```