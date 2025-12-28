import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "../context/ThemeContext"
import { FaTerminal, FaTimes, FaMinus, FaExternalLinkAlt } from "react-icons/fa"

const Terminal = ({ isOpen, onClose }) => {
    const { theme, setTheme } = useTheme()
    const [input, setInput] = useState("")
    const [history, setHistory] = useState([
        { type: "info", content: "Welcome to Tanmoy's System Terminal [Version 2.0.4]" },
        { type: "info", content: "Type 'help' to see available commands." },
    ])
    const [historyIndex, setHistoryIndex] = useState(-1)
    const [commandHistory, setCommandHistory] = useState([])
    const scrollRef = useRef(null)
    const inputRef = useRef(null)

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [history])

    const handleCommand = (e) => {
        if (e.key === "Enter" && input.trim()) {
            const cmd = input.trim().toLowerCase()
            setCommandHistory([input, ...commandHistory])
            setHistoryIndex(-1)

            const newHistory = [...history, { type: "command", content: `> ${input}` }]

            switch (cmd) {
                case "help":
                    newHistory.push({ type: "success", content: "Available Commands: help, whoami, ls, clear, ping, theme, sudo, exit" })
                    break
                case "whoami":
                    newHistory.push({ type: "info", content: "Tanmoy Debnath - Automation Engineer & Backend Developer. Obsessed with high-performance APIs and autonomous systems." })
                    break
                case "ls":
                    newHistory.push({ type: "info", content: "projects/  skills/  resume.pdf  config.yaml  about.md" })
                    break
                case "clear":
                    setHistory([])
                    setInput("")
                    return
                case "ping":
                    newHistory.push({ type: "info", content: "PING 127.0.0.1 (127.0.0.1): 56 data bytes" })
                    newHistory.push({ type: "success", content: "64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms" })
                    break
                case "sudo":
                    newHistory.push({ type: "error", content: "[ACCESS DENIED] User is not in the sudoers file. This incident will be reported." })
                    break
                case "exit":
                    onClose()
                    break
                case "theme":
                    const themes = ["midnight", "solar", "cosmic"]
                    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length]
                    setTheme(nextTheme)
                    newHistory.push({ type: "success", content: `Atmosphere calibrated to: ${nextTheme.toUpperCase()}` })
                    break
                default:
                    newHistory.push({ type: "error", content: `bash: command not found: ${cmd}` })
            }

            setHistory(newHistory)
            setInput("")
        } else if (e.key === "ArrowUp") {
            if (historyIndex < commandHistory.length - 1) {
                const nextIdx = historyIndex + 1
                setHistoryIndex(nextIdx)
                setInput(commandHistory[nextIdx])
            }
        } else if (e.key === "ArrowDown") {
            if (historyIndex > 0) {
                const nextIdx = historyIndex - 1
                setHistoryIndex(nextIdx)
                setInput(commandHistory[nextIdx])
            } else {
                setHistoryIndex(-1)
                setInput("")
            }
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    className="fixed bottom-24 right-8 w-[90vw] md:w-[500px] h-[400px] [background-color:var(--bg-secondary)] border [border-color:var(--border-color)] rounded-2xl shadow-2xl z-[100] overflow-hidden flex flex-col backdrop-blur-xl"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--bg-secondary), transparent 10%)' }}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b [border-color:var(--border-color)] [background-color:rgba(var(--bg-primary),0.5)]">
                        <div className="flex items-center gap-2">
                            <FaTerminal className="text-xs [color:var(--accent)]" />
                            <span className="text-[10px] uppercase tracking-widest font-bold [color:var(--text-secondary)] opacity-70">
                                system_terminal_v2.0
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="[color:var(--text-secondary)] hover:[color:var(--text-primary)] transition-colors">
                                <FaMinus className="text-[10px]" />
                            </button>
                            <button onClick={onClose} className="[color:var(--text-secondary)] hover:text-red-500 transition-colors">
                                <FaTimes className="text-[10px]" />
                            </button>
                        </div>
                    </div>

                    {/* Body */}
                    <div
                        ref={scrollRef}
                        className="flex-1 p-4 font-mono text-sm overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-stone-800"
                    >
                        {history.map((line, idx) => (
                            <div
                                key={idx}
                                className={`${line.type === "error" ? "text-red-400" :
                                        line.type === "success" ? "text-green-400" :
                                            line.type === "command" ? "[color:var(--accent)]" :
                                                "[color:var(--text-primary)]"
                                    } leading-relaxed break-words`}
                            >
                                {line.content}
                            </div>
                        ))}

                        <div className="flex items-center gap-2 [color:var(--text-primary)]">
                            <span className="[color:var(--accent)] font-bold">visitor@tanmoy:~$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                className="flex-1 bg-transparent outline-none border-none p-0 text-sm"
                                autoFocus
                            />
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="px-4 py-2 border-t [border-color:var(--border-color)] [background-color:rgba(var(--bg-primary),0.3)] flex justify-between items-center">
                        <span className="text-[9px] [color:var(--text-secondary)] opacity-50 uppercase tracking-tight">
                            Type 'exit' or click outside to close
                        </span>
                        <div className="h-1.5 w-1.5 rounded-full [background-color:var(--accent)] animate-pulse" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Terminal
