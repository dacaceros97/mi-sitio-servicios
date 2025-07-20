'use client';

import { useState } from 'react';
import styles from '../page.module.css';
import Link from 'next/link';

export default function AgendarPage() {
    const [formData, setFormData] = useState({
        studentName: '',
        studentEmail: '',
        appointmentDate: '',
        appointmentTime: '',
    });
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setIsError(false);

        try {
            const response = await fetch('http://localhost:5000/api/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setFormData({ studentName: '', studentEmail: '', appointmentDate: '', appointmentTime: '' });
            } else {
                setIsError(true);
                setMessage(data.error || 'Ocurrió un error al agendar la cita.');
            }
        } catch (error) {
            console.error('Error de red:', error);
            setIsError(true);
            setMessage('No se pudo conectar con el servidor. Intenta de nuevo más tarde.');
        }
    };

    return (
        <>
            <header className={styles.bookingHeader}>
                <h1>Agenda tu Sesión de Mentoría</h1>
                <p>Completa el formulario para reservar tu espacio. Recibirás una confirmación por correo electrónico.</p>
                <nav>
                    <Link href="/" className={styles.ctaButton}>Volver a la Página Principal</Link>
                </nav>
            </header>

            <main className={styles.mainContent}>
                <section className={styles.bookingSection}>
                    <form onSubmit={handleSubmit} className={styles.bookingForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="studentName">Tu Nombre:</label>
                            <input
                                type="text"
                                id="studentName"
                                name="studentName"
                                value={formData.studentName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="studentEmail">Tu Correo Electrónico:</label>
                            <input
                                type="email"
                                id="studentEmail"
                                name="studentEmail"
                                value={formData.studentEmail}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="appointmentDate">Fecha Deseada:</label>
                            <input
                                type="date"
                                id="appointmentDate"
                                name="appointmentDate"
                                value={formData.appointmentDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="appointmentTime">Hora Deseada:</label>
                            <input
                                type="time"
                                id="appointmentTime"
                                name="appointmentTime"
                                value={formData.appointmentTime}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className={styles.submitButton}>Agendar Sesión</button>
                    </form>

                    {message && (
                        <p className={isError ? styles.errorMessage : styles.successMessage}>
                            {message}
                        </p>
                    )}
                </section>
            </main>
        </>
    );
}