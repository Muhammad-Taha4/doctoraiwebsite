/* ============================================================
   CURE CLAIM SOLUTIONS – Forms Handler (Supabase)
   Handles: contact, audit, consultation, appointment, newsletter
   ============================================================ */

/* ── TOAST NOTIFICATION SYSTEM ── */
function showToast(message, type = 'success') {
    const existing = document.getElementById('ccs-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'ccs-toast';
    const isSuccess = type === 'success';
    toast.innerHTML = `
        <i class="fas ${isSuccess ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>`;

    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: isSuccess
            ? 'linear-gradient(135deg, #00b894, #00cec9)'
            : 'linear-gradient(135deg, #e74c3c, #c0392b)',
        color: '#fff',
        padding: '14px 22px',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '0.92rem',
        fontWeight: '500',
        zIndex: '99999',
        transform: 'translateX(120%)',
        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
        maxWidth: '360px'
    });

    document.body.appendChild(toast);
    requestAnimationFrame(() => { toast.style.transform = 'translateX(0)'; });
    setTimeout(() => {
        toast.style.transform = 'translateX(120%)';
        setTimeout(() => toast.remove(), 420);
    }, 4000);
}

function setSubmitting(btn, loading) {
    if (loading) {
        btn.dataset.orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
        btn.disabled = true;
    } else {
        btn.innerHTML = btn.dataset.orig || 'Submit';
        btn.disabled = false;
    }
}

/* ── CONTACT FORM (id="contact-form") ── */
function initContactForm() {
    const form = document.getElementById('contact-form')
        || document.getElementById('contactMainForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        setSubmitting(btn, true);

        const payload = {
            full_name: (form.querySelector('#cf-name') || form.querySelector('[name="full_name"]'))?.value?.trim(),
            email: (form.querySelector('#cf-email') || form.querySelector('[name="email"]'))?.value?.trim(),
            phone: (form.querySelector('#cf-phone') || form.querySelector('[name="phone"]'))?.value?.trim(),
            service_interested: (form.querySelector('#cf-service') || form.querySelector('[name="service_interested"]'))?.value,
            message: (form.querySelector('#cf-message') || form.querySelector('[name="message"]'))?.value?.trim(),
        };

        try {
            const { error } = await supabaseClient.from('contacts').insert([payload]);
            if (error) throw error;
            showToast("Thank you! We'll contact you within 24 hours.", 'success');
            form.reset();
        } catch (err) {
            console.error('Contact form error:', err);
            showToast('Something went wrong. Please try again.', 'error');
        } finally {
            setSubmitting(btn, false);
        }
    });
}

/* ── AUDIT REQUEST FORM (id="audit-form") ── */
function initAuditForm() {
    const form = document.getElementById('audit-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        setSubmitting(btn, true);

        const getVal = (sel) => form.querySelector(sel)?.value?.trim() || '';
        const payload = {
            full_name: getVal('#af-name, [name="full_name"]'),
            email: getVal('#af-email, [name="email"]'),
            phone: getVal('#af-phone, [name="phone"]'),
            practice_name: getVal('#af-practice, [name="practice_name"]'),
            specialty: getVal('#af-specialty, [name="specialty"]'),
            message: getVal('#af-message, textarea'),
        };

        try {
            const { error } = await supabaseClient.from('audit_requests').insert([payload]);
            if (error) throw error;
            showToast("Audit request received! We'll reach out within 24 hours.", 'success');
            form.reset();
        } catch (err) {
            console.error('Audit form error:', err);
            showToast('Something went wrong. Please try again.', 'error');
        } finally {
            setSubmitting(btn, false);
        }
    });
}

/* ── CONSULTATION / QUICK FORM (id="consultation-form") ── */
function initConsultationForm() {
    const form = document.getElementById('consultation-form')
        || document.getElementById('quickContactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        setSubmitting(btn, true);

        const nameEl = form.querySelector('input[type="text"]');
        const phoneEl = form.querySelector('input[type="tel"]');
        const serviceEl = form.querySelector('select');

        const payload = {
            full_name: nameEl?.value?.trim(),
            phone: phoneEl?.value?.trim(),
            service_interested: serviceEl?.value,
            source: 'homepage',
        };

        try {
            const { error } = await supabaseClient.from('leads').insert([payload]);
            if (error) throw error;
            showToast("Thank you! Our team will contact you shortly.", 'success');
            form.reset();
        } catch (err) {
            console.error('Consultation form error:', err);
            showToast('Something went wrong. Please try again.', 'error');
        } finally {
            setSubmitting(btn, false);
        }
    });
}

/* ── APPOINTMENT FORM (id="appointment-form") ── */
function initAppointmentForm() {
    const form = document.getElementById('appointment-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        setSubmitting(btn, true);

        const getVal = (sel) => form.querySelector(sel)?.value?.trim() || '';
        const payload = {
            full_name: getVal('[name="full_name"], input[type="text"]'),
            email: getVal('[name="email"], input[type="email"]'),
            phone: getVal('[name="phone"], input[type="tel"]'),
            specialty: getVal('[name="specialty"]'),
            preferred_date: getVal('[name="preferred_date"], input[type="date"]'),
            preferred_time: getVal('[name="preferred_time"], input[type="time"]'),
        };

        try {
            const { error } = await supabaseClient.from('appointments').insert([payload]);
            if (error) throw error;
            showToast("Appointment requested! We'll confirm within 24 hours.", 'success');
            form.reset();
        } catch (err) {
            console.error('Appointment form error:', err);
            showToast('Something went wrong. Please try again.', 'error');
        } finally {
            setSubmitting(btn, false);
        }
    });
}

/* ── NEWSLETTER FORMS ── */
function initNewsletterForms() {
    // Handle any newsletter form on the page (multiple possible)
    const selectors = ['#newsletter-form', '#newsletterForm', '.newsletter-form'];
    const forms = [];
    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(f => {
            if (!forms.includes(f)) forms.push(f);
        });
    });

    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const btn = form.querySelector('button[type="submit"]');
            const email = emailInput?.value?.trim();

            if (!email) { showToast('Please enter your email address.', 'error'); return; }
            if (btn) setSubmitting(btn, true);

            try {
                const { error } = await supabaseClient
                    .from('newsletter_subscribers')
                    .insert([{ email }]);

                if (error) {
                    // Postgres unique violation code = 23505
                    if (error.code === '23505') {
                        showToast("You're already subscribed!", 'success');
                    } else {
                        throw error;
                    }
                } else {
                    showToast('Successfully subscribed!', 'success');
                    form.reset();
                }
            } catch (err) {
                console.error('Newsletter form error:', err);
                showToast('Something went wrong. Please try again.', 'error');
            } finally {
                if (btn) setSubmitting(btn, false);
            }
        });
    });
}

/* ── INIT ALL ── */
document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
    initAuditForm();
    initConsultationForm();
    initAppointmentForm();
    initNewsletterForms();
});
