import express from 'express';
export const test = (req,res) =>{
    res.json({
        message:'API is working!',
    });
};