<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Mail\Contact;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ContactRequest;
use Illuminate\Support\Facades\Session;

class PropertyController extends Controller
{
    public function index() {
        $properties = Property::all();
        return Inertia::render('Property/Index', ['properties' => $properties]);
    }

    public function show(Property $property) {
        return Inertia::render('Property/Show', ['property' => $property->toArray()]);
    }

    public function contact(Property $property, ContactRequest $request) {
        Mail::to('sylvain.macabrey@gmail.com', 'Sylvain Macabrey')->queue(new Contact($request->all(), $property));
        return back()->with('success', 'Merci de nous avoir contacté');
    }
}
