"use client"
import React, { useActionState, useOptimistic, useRef } from 'react'
import { SubmitButton } from './NestedForm'; 
import FeedForm from './actions/FeedForm';

const SmartFeedBackform = () => {
    // 1. Fixed initial state: optim should be false initially
    const [state, action] = useActionState(FeedForm, { text: "", optim: false });
    const formRef = useRef(null);

    const [opt, addOpt] = useOptimistic(state, (curr, newtak) => {
        return { text: newtak, optim: true }
    });

    return (
        <>
        <hr/>
        <div>SmartForm with useOptimistic</div>
        <div className="container mt-5">
            <div className="card shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
                <div className="card-body">
                    <h4 className="card-title mb-4">Smart Feedback</h4>
                    
                    <form 
                        ref={formRef}
                        action={async (formData) => {
                            const feed = formData.get('text');
                            if (!feed) return;
                            
                            formRef.current?.reset(); // Clear input instantly
                            addOpt(feed);            // Show optimistic update
                            await action(formData);  // Server update
                        }}
                    >
                        <div className="mb-3">
                            <label className="form-label text-muted small">Your Message</label>
                            <textarea 
                                className="form-control" 
                                placeholder='What is on your mind?' 
                                name="text" 
                                rows="3"
                                required
                                
                            />
                        </div>
                        
                        <div className="d-grid">
                            <SubmitButton />
                        </div>
                    </form>

                    <div className="mt-4 pt-3 border-top">
                        <p className="text-secondary small mb-1">Latest Feedback:</p>
                        {/* 2. Professional styling for the output */}
                        {opt.text ? (
                            <div 
                                className={`p-3 rounded ${opt.optim ? 'bg-light' : 'bg-primary text-white'}`}
                                style={{ 
                                    opacity: opt.optim ? 0.6 : 1, 
                                    transition: 'all 0.3s ease',
                                    border: opt.optim ? '1px dashed #ccc' : 'none'
                                }}
                            >
                                <span className="h5 mb-0">{opt.text}</span>
                                {opt.optim && <div className="spinner-border spinner-border-sm ms-2" role="status"></div>}
                            </div>
                        ) : (
                            <p className="text-muted italic">No feedback submitted yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default SmartFeedBackform
