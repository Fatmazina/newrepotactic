<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembershipsTable extends Migration
{
    public function up()
    {
        Schema::create('memberships', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('project_id')->constrained()->onDelete('cascade');
            $table->string('user_role');
            $table->timestamps();
            
            // Définir une clé primaire composite explicite
            $table->primary(['user_id', 'project_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('memberships');
    }
}
