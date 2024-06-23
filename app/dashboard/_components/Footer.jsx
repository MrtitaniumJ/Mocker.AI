import React from 'react'

function Footer() {
    return (
        <footer className="text-center py-4 bg-indigo-700 text-white">
            <p>© {new Date().getFullYear()} Mocker.AI. All rights reserved.</p>
        </footer>
    )
}

export default Footer
