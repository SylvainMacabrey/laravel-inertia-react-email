<?php

namespace App\Mail;

use App\Models\Property;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Contact extends Mailable
{
    use Queueable, SerializesModels;

    public $contact;
    public $property;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Array $contact, Property $property)
    {
        $this->contact = $contact;
        $this->property = $property;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('sylvain.macabrey@gmail.com', 'Sylvain Macabrey')->view('email.contact');
    }
}
